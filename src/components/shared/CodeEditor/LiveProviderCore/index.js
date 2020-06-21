import React, { useEffect } from "react";

import { addFocusOnEditor, getPreviewElement } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { lightTheme } from "utils/reactLiveTheme";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
// import Headline from "components/library/MoHeadline";
import MoLinearProgress from "components/library/MoLinearProgress";
import MoBrowserMockup from "components/library/MoBrowserMockup";
import Typist from "react-typist";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const LiveProviderCore = ({
  codeAnswer,
  codeLanguage,
  codeQuestion,
  handleOnChange,
  isMobile,
  isPlayground,
  md,
  matchPercent,
  sm
}) => {
  useEffect(() => {
    addFocusOnEditor();
  }, [codeQuestion]);

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
          color: theme.grey.light,
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
    <LiveProvider code={codeQuestion} language="jsx" noInline={false}>
      <Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
        <Slide
          direction="right"
          in={codeAnswer && true}
          mountOnEnter
          timeout={{ enter: 400, exit: 400 }}
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
        </Slide>
      </Grid>
      <Grid item md={md} sm={sm} xs={12}>
        <Slide
          direction="left"
          in={(isPlayground && true) || (codeAnswer && true)}
          mountOnEnter
          timeout={{ enter: 400, exit: 400 }}
          unmountOnExit
        >
          <div>
            <MoBrowserMockup fileType={codeLanguage} isEditor={false}>
              {codeQuestion && <LivePreview className={classes.livePreview} />}
            </MoBrowserMockup>
          </div>
        </Slide>
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
  );
};

export default LiveProviderCore;
