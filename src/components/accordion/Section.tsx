import * as React from 'react';
import styles from './Accordion.module.scss';
import { ArrowDownIcon } from '@atoms';
import { dashGreen00 } from '@colors';
import { getClassNames } from '@utility/cssUtils';

export interface AccordionSectionProps {
  label?: string;
  header?: React.ReactElement;
  children?: React.ReactNode;

  /** Only used by the Accordion Wrapper, not to be passed anything. */
  toggleSection?: (requestedState: boolean) => void;

  /** Whether the section is open or not, used when not wrapped in an Accordion. */
  open?: boolean;
  /** Adds an opacity to the whole section and blocks any pointer-events from passing through. */
  locked?: boolean;
  /** If the Accordion header can be toggled by the user.*/
  toggable?: boolean;

  sectionContentClassName?: string;
  lockedClassName?: string;
  sectionContainerStyle?: {
    backgroundColor?: string;
    lockedOpacity?: number;
  };
}

const Section = ({
  label,
  header,
  open,
  locked = false,
  toggable = true,
  toggleSection,
  children,
  sectionContainerStyle,
  sectionContentClassName,
  lockedClassName
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onHeaderClick = () => {
    if (!toggable) return;

    if (toggleSection) {
      toggleSection(!isOpen);
    } else {
      setIsOpen(sectionIsOpen => !sectionIsOpen);
    }
  };

  let Header = header ? (
    <header onClick={onHeaderClick}>{header}</header>
  ) : (
    <header className={styles.AccordionSectionHeader} onClick={onHeaderClick}>
      <div>{label}</div>
      <div style={{ float: 'right' }}>
        <ArrowDownIcon
          height={50}
          width={30}
          iconAnimated={false}
          color={dashGreen00}
          rotate={isOpen ? 180 : 0}
        />
      </div>
    </header>
  );

  const containerStyle: { backgroundColor?: string; opacity?: number } = {};

  if (locked) {
    containerStyle.opacity = 0.5;
  }

  if (sectionContainerStyle !== undefined) {
    if (sectionContainerStyle.backgroundColor) {
      containerStyle['backgroundColor'] = sectionContainerStyle.backgroundColor;
    }
    if (sectionContainerStyle.lockedOpacity) {
      if (locked) {
        containerStyle['opacity'] = sectionContainerStyle.lockedOpacity;
      }
    }
  }

  const contentClass = getClassNames(
    styles.AccordionSectionContent,
    sectionContentClassName ? sectionContentClassName : '',
    locked
      ? lockedClassName
        ? lockedClassName
        : styles.AccordionSectionContentLocked
      : ''
  );

  return (
    <div
      className={styles.AccordionSectionContainer}
      style={{ ...containerStyle }}
    >
      {Header}
      {isOpen && (
        <div
          className={contentClass}
          style={{ pointerEvents: locked ? 'none' : 'auto' }}
        >
          <div className={styles.AccordionContentDivider} />
          {children}
        </div>
      )}
    </div>
  );
};

export { Section };
