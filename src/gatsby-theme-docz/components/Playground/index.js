/**
 * Original source : https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Playground/index.js
 */

import * as Icons from 'gatsby-theme-docz/src/components/Icons';
import * as styles from 'gatsby-theme-docz/src/components/Playground/styles';

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import React from 'react';
import { Resizable } from 're-resizable';
import { Wrapper } from 'gatsby-theme-docz/src/components/Playground/Wrapper';
import copy from 'copy-text-to-clipboard';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useConfig } from 'docz';
import { usePrismTheme } from '~utils/theme';

const getResizableProps = (width, setWidth) => ({
  minWidth: 260,
  maxWidth: '100%',
  size: {
    width: width,
    height: 'auto'
  },
  style: {
    margin: 0,
    marginRight: 'auto'
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false
  },
  onResizeStop: (e, direction, ref) => {
    setWidth(ref.style.width);
  }
});

const transformCode = code => {
  if (code.startsWith('()') || code.startsWith('class')) return code;
  return `<React.Fragment>${code}</React.Fragment>`;
};

export const Playground = ({
  code,
  scope,
  language,
  useScoping = false,
  /** Add custom style support */
  style = { preview: {} },
  className = { preview: '' }
}) => {
  const {
    themeConfig: { showPlaygroundEditor, showLiveError, showLivePreview }
  } = useConfig();

  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [scopeOnMount] = React.useState(scope);
  const theme = usePrismTheme();
  const [showingCode, setShowingCode] = React.useState(showPlaygroundEditor);
  const [width, setWidth] = React.useState('100%');
  const resizableProps = getResizableProps(width, setWidth);

  const copyCode = () => copy(code);
  const toggleCode = () => setShowingCode(s => !s);

  return (
    <Resizable {...resizableProps} data-testid='playground'>
      <LiveProvider
        code={code}
        scope={scopeOnMount}
        transformCode={transformCode}
        language={language}
        theme={theme}
      >
        <div sx={styles.previewWrapper}>
          <Wrapper
            content='preview'
            useScoping={useScoping}
            showingCode={showingCode}
          >
            {showLivePreview && (
              <LivePreview
                sx={styles.preview}
                /** Add custom style support */
                style={style.preview}
                className={className.preview}
                data-testid='live-preview'
              />
            )}
          </Wrapper>
          <div sx={styles.buttons}>
            <button sx={styles.button} onClick={copyCode}>
              <Icons.Clipboard size={12} />
            </button>
            <button sx={styles.button} onClick={toggleCode}>
              <Icons.Code size={12} />
            </button>
          </div>
        </div>
        {showingCode && (
          <Wrapper
            content='editor'
            useScoping={useScoping}
            showingCode={showingCode}
          >
            <div sx={styles.editor(theme)}>
              <LiveEditor data-testid='live-editor' />
            </div>
          </Wrapper>
        )}
        {showLiveError && (
          <LiveError sx={styles.error} data-testid='live-error' />
        )}
      </LiveProvider>
    </Resizable>
  );
};
