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
 * @param {Boolean} isMobile - Detects if we are on a mobile device
 * @param {Boolean} isPlayground - Currently used to display the error console
 * @param {Number} md - Grid styling when viewing on a medium size device
 * @param {Number} matchPercent - Used to fill in the progress bar, how close is the code to the correct state
 * @param {Number} sm - Grid styling when viewing on a small size device
 * @returns {<LiveProvider/>} - returns the parent wrapper for react-live
 *
 * @see See [react-live](https://github.com/FormidableLabs/react-live)
 * */

import React, { useEffect } from "react";

import { addFocusOnEditor, getPreviewElement } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { lightTheme } from "utils/reactLiveTheme";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
// import Headline from "components/library/MoHeadline";
import MoLinearProgress from "components/library/MoLinearProgress";
import MoBrowserMockup from "components/library/MoBrowserMockup";
import Typist from "react-typist";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const CodeEditorPage = ({
  codeAnswer,
  codeLanguage,
  codeQuestion,
  handleOnChange,
  isMobile,
  isPlayground,
  isEditMode,
  md,
  matchPercent,
  sm
}) => {
  useEffect(() => {
    if (!isEditMode) {
      addFocusOnEditor();
    }
  }, [isEditMode, codeQuestion]);

  const onChange = userAnswer => {
    const previewElement = getPreviewElement();
    handleOnChange({ userAnswer, previewElement });
  };

  // TODO finish number of lines for editor
  // Count newlines and pad to match actual line numbers
  const lines = (codeQuestion?.match(/\n/g) || []).length + 2;
  // Create content with all line numbers and newline them
  const lineNos = [...Array(lines).keys()].slice(1).join("\\00000a");

  const useStyles = makeStyles(theme =>
    createStyles({
      hint: {
        ...theme.editorFont,
        color: "#8e8e8e",
        top: "1.25rem",
        position: "absolute",
        zIndex: "-1",
        padding: "0.625rem"
      },
      liveEditor: {
        overflow: "visible !important",
        "&:before": {
          color: theme.grey?.light,
          left: "-1.75rem",
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
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <LiveProvider
        code={codeQuestion}
        language={codeLanguage || "jsx"}
        noInline={false}
      >
        <Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
          <Fade
            in={codeAnswer && true}
            mountOnEnter
            timeout={{ enter: 800, exit: 200 }}
            unmountOnExit
          >
            <div>
              <MoBrowserMockup
                fileType={codeLanguage}
                matchPercent={matchPercent}
                isEditor={true}
              >
                <div>
                  <LiveEditor
                    onChange={e => onChange(e)}
                    theme={lightTheme}
                    className={classes.liveEditor}
                  />
                  {!codeQuestion && codeAnswer && (
                    <div className={classes.hint}>
                      <Typist
                        avgTypingDelay={60}
                        stdTypingDelay={30}
                        startDelay={800}
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
              {matchPercent && <MoLinearProgress percent={matchPercent} />}
            </div>
          </Fade>
        </Grid>
        <Grid item md={md} sm={sm} xs={12}>
          <Fade
            in={(isPlayground && true) || (codeAnswer && true)}
            mountOnEnter
            timeout={{ enter: 800, exit: 200 }}
            unmountOnExit
          >
            <div>
              <MoBrowserMockup fileType={codeLanguage} isEditor={false}>
                {codeAnswer && <LivePreview className={classes.livePreview} />}
              </MoBrowserMockup>
            </div>
          </Fade>
        </Grid>
        {isPlayground && (
          <Grid item md={12} sm={12} xs={12}>
            <LiveError />
          </Grid>
        )}
        {/* 
      TODO Add Headline effect
      <Grid item md={12} sm={12} xs={12}>
        <Headline isCorrect={question && question.isCorrect} />
      </Grid> */}
      </LiveProvider>
    </Grid>
  );
};

export default CodeEditorPage;
