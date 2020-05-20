import * as React from 'react';
import { Section } from './Section';
import styles from './Accordion.module.scss';
import { getClassNames } from '@utility/cssUtils';

interface AccordionState {
  maxOneSectionOpen?: boolean;
  allSectionsOpened?: boolean;
  oneSectionAlwaysOpen?: boolean;
  opened?: number[];
}

export interface AccordionProps extends AccordionState {
  children: React.ReactNode;
  accordionClassName?: string;
}

const Accordion = ({
  maxOneSectionOpen,
  allSectionsOpened,
  oneSectionAlwaysOpen,
  opened,
  accordionClassName,
  children
}: AccordionProps) => {
  const [openedSections, setOpenedSections] = React.useState<Set<number>>(
    new Set<number>(opened ? opened : [])
  );

  React.useEffect(() => {
    if (allSectionsOpened) {
      const allChildrenIndexes = Array.from(
        Array(children ? React.Children.toArray(children).length : 0).keys()
      );
      setOpenedSections(new Set<number>(allChildrenIndexes));
    } else if (oneSectionAlwaysOpen) {
      const openIndex = opened ? (opened.length > 0 ? opened : [0]) : [0];
      setOpenedSections(new Set<number>(openIndex));
    } else {
      setOpenedSections(new Set<number>(opened));
    }
  }, [opened, allSectionsOpened, children, oneSectionAlwaysOpen]);

  const toggleSection = (index: number, requestedOpen: boolean) => {
    if (requestedOpen) {
      if (maxOneSectionOpen) {
        setOpenedSections(new Set([index]));
      } else {
        setOpenedSections(
          prevSections => new Set<number>([...prevSections, index])
        );
      }
    } else {
      if (oneSectionAlwaysOpen) {
        if (openedSections.size !== 1) {
          setOpenedSections(prevSections => {
            prevSections.delete(index);
            return new Set<number>([...prevSections]);
          });
        }
      } else {
        setOpenedSections(prevSections => {
          prevSections.delete(index);
          return new Set<number>([...prevSections]);
        });
      }
    }
  };

  const containerClass = getClassNames(
    styles.AccordionContainer,
    accordionClassName ? accordionClassName : ''
  );

  return (
    <div className={containerClass}>
      {children
        ? React.Children.toArray(children).map((child: any, index: number) => {
            return React.cloneElement(child, {
              className: containerClass,
              open: openedSections.has(index),
              toggleSection: (requestedState: boolean) =>
                toggleSection(index, requestedState)
            });
          })
        : null}
    </div>
  );
};

Accordion.Section = Section;
export { Accordion };
