import React, { useEffect } from "react";

import { addFocusOnEditor } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import { reactLiveTheme } from "utils/reactLiveTheme";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Headline from "components/library/MoHeadline";
import MoBrowserMockup from "components/library/MoBrowserMockup";
import MoLinearProgress from "components/library/MoLinearProgress";
import styles from "./styles";
import Typist from "react-typist";
import withStyles from "@material-ui/core/styles/withStyles";

const LiveProviderCore = ({
  classes,
  handleOnChange,
  md,
  sm,
  matchPercent,
  question,
}) => {
  useEffect(() => {
    addFocusOnEditor();
  }, [question]);

  return (
    <LiveProvider code={question.question} language="jsx" noInline={false}>
      <Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
        <Slide
          direction="right"
          in={question.answer && true}
          mountOnEnter
          timeout={{ enter: 400, exit: 400 }}
          unmountOnExit
        >
          <div>
            <MoBrowserMockup fileType={question.language} isEditor={true}>
              <LiveEditor onChange={handleOnChange} theme={reactLiveTheme} />
              {!question.question && (
                <Typist
                  className={classes.hint}
                  avgTypingDelay={60}
                  stdTypingDelay={30}
                  startDelay={800}
                  cursor={{
                    show: true,
                    blink: false,
                    element: (
                      <span
                        role="img"
                        aria-label="magical dust"
                        className={classes.typistEmoji}
                      >
                        ✨
                      </span>
                    ),
                    hideWhenDone: true,
                  }}
                >
                  {question.answer}
                </Typist>
              )}
              {matchPercent && (
                <MoLinearProgress percent={matchPercent * 100} />
              )}
            </MoBrowserMockup>
          </div>
        </Slide>
      </Grid>
      <Grid item md={md} sm={sm} xs={12}>
        <Slide
          direction="left"
          in={(question.isPlayground && true) || (question.answer && true)}
          mountOnEnter
          timeout={{ enter: 400, exit: 400 }}
          unmountOnExit
        >
          <div>
            <MoBrowserMockup fileType={question.language} isBrowser={true}>
              <LivePreview />
            </MoBrowserMockup>
          </div>
        </Slide>
      </Grid>
      {question.isPlayground && (
        <Grid item md={12} sm={12} xs={12}>
          <LiveError />
        </Grid>
      )}
      <Grid item md={12} sm={12} xs={12}>
        <Headline isCorrect={question && question.isCorrect} />
      </Grid>
    </LiveProvider>
  );
};

export default withStyles(styles)(LiveProviderCore);
