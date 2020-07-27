/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Coed Editor 🚀
 *
 * Uses react-live and provides a panel for writing code and another one for rendering the code
 * It also provides an error console to debug code
 *
 * This editor can handle JSX or React class based components
 *
 * @see Demo [usage demo](https://react-live.netlify.app/)
 *
 * @param {String} codeAnswer - Expected answer for the question
 * @param {String} codeLanguage - Language of code, html or jsx
 * @param {String} codeQuestion - Optional - Question in a form of a code or could behave as a starting point
 * @param {CallableFunction} handleOnChange - Handles changes to code as viewers type in code
 * @param {Boolean} isConsole - Enables the error console
 * @param {Boolean} isMobile - Detects if we are on a mobile device
 * @param {Boolean} isPlayground - Currently used to display the error console
 * @param {Number} md - Grid styling when viewing on a medium size device
 * @param {Number} matchPercent - Used to fill in the progress bar, how close is the code to the correct state
 * @param {Number} sm - Grid styling when viewing on a small size device
 * @returns {<LiveProvider/>} - returns the parent wrapper for react-live
 *
 * @see See [react-live](https://github.com/FormidableLabs/react-live)
 * */

import React, { useEffect, useMemo } from "react";

import { addFocusOnEditor, getPreviewElement } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import MoProgressLinear from "components/library/MoProgressLinear";
import MoBrowserMockup from "components/library/MoBrowserMockup";
import Typist from "react-typist";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useGlobal from "store";

// Code Editor Themes
import getTheme from "theme/codeEditor/getTheme";

const CodeEditor = ({
  codeAnswer,
  codeLanguage,
  codeQuestion,
  handleOnChange,
  isConsole,
  isMobile,
  noInline,
  isPlayground,
  isEditMode,
  isHintTypist,
  md,
  matchPercent,
  sm,
  title
}) => {
  useEffect(() => {
    if (!isEditMode) {
      addFocusOnEditor();
    }
  }, [codeQuestion, isEditMode]);

  // Global state for dark mode theme
  const [isDarkMode] = useGlobal(state => state.themeOptions.isDarkMode);

  const onChange = userAnswer => {
    const previewElement = getPreviewElement();
    handleOnChange({ userAnswer, previewElement });
  };

  // TODO move number lines for editor to another component
  // Count newlines and pad to match actual line numbers
  const lines = ((codeQuestion && codeQuestion.match(/\n/g)) || []).length + 2;
  // Create content with all line numbers and newline them
  const lineNos = [...Array(lines).keys()].slice(1).join("\\00000a");

  const useStyles = makeStyles(theme =>
    createStyles({
      hint: {
        ...theme.editorFont,
        color: "#8e8e8e",
        top: "3.25rem",
        position: "absolute",
        zIndex: "0",
        padding: "0.625rem"
      },
      liveEditor: {
        overflow: "visible !important",
        zIndex: "1",
        "&:before": {
          left: "-2rem",
          fontFamily: "Inconsolata, monospace",
          paddingTop: "0.6rem",
          content: `"${lineNos}"`,
          width: `1.25rem`,
          position: "absolute",
          whiteSpace: "pre",
          textAlign: "right",
          opacity: 1,
          top: 0
        }
      }
    })
  );

  const codeEditorTheme = useMemo(() => getTheme({ isDarkMode }), [isDarkMode]);

  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <LiveProvider
        code={codeQuestion}
        language={codeLanguage || "jsx"}
        noInline={noInline || false}
      >
        <Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
          <Grow
            in={codeAnswer && true}
            // mountOnEnter
            timeout={{ enter: 400 }}
            // unmountOnExit
          >
            <div>
              <MoBrowserMockup
                title={title}
                matchPercent={matchPercent}
                isEditor={true}
              >
                <div>
                  <LiveEditor
                    onChange={e => onChange(e)}
                    theme={codeEditorTheme}
                    className={classes.liveEditor}
                  />
                  {isHintTypist && (
                    <div className={classes.hint}>
                      <Typist
                        avgTypingDelay={60}
                        stdTypingDelay={30}
                        startDelay={200}
                        cursor={{
                          show: true,
                          blink: false,
                          hideWhenDone: true
                        }}
                      >
                        {codeAnswer}
                      </Typist>
                    </div>
                  )}
                </div>
              </MoBrowserMockup>
              {matchPercent && <MoProgressLinear percent={matchPercent} />}
            </div>
          </Grow>
        </Grid>
        <Grid item md={md} sm={sm} xs={12}>
          <Grow
            in={(isPlayground && true) || (codeAnswer && true)}
            // mountOnEnter
            timeout={{ enter: 400 }}
            // unmountOnExit
          >
            <div>
              <MoBrowserMockup isEditor={false}>
                {codeAnswer && <LivePreview className={classes.livePreview} />}
              </MoBrowserMockup>
            </div>
          </Grow>
        </Grid>
        {isConsole && (
          <Grid item md={12} sm={12} xs={12}>
            <LiveError />
          </Grid>
        )}
      </LiveProvider>
    </Grid>
  );
};

export default CodeEditor;
