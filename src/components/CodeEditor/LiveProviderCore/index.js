import React, { useEffect } from "react";

import { addFocusOnEditor } from "./util";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import Grid from "@material-ui/core/Grid";
import Headline from "../../shared/Headline";
import Slide from "@material-ui/core/Slide";
import MoParagraph from "../../shared/MoParagraph";
import { reactLiveTheme } from "../../../utils/reactLiveTheme";
import MoBrowserMockup from "../../shared/MoBrowserMockup";

const LiveProviderCore = ({ handleOnChange, md, sm, question }) => {
  useEffect(() => {
    addFocusOnEditor();
  }, []);

  return (
    <LiveProvider code={question.question} language="jsx" noInline={false}>
      <Grid item md={6} sm={12} xs={12}>
        <MoParagraph
          text={question.label}
          fade={question.label && true}
          margin="36px 0 36px"
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}></Grid>
      <Grid item md={md} sm={sm} xs={12} style={{ width: "100%" }}>
        <Slide
          direction="right"
          in={question.question && true}
          mountOnEnter
          timeout={{ enter: 800, exit: 400 }}
          unmountOnExit
        >
          <div>
            <MoBrowserMockup fileType={question.language} isEditor={true}>
              <LiveEditor onChange={handleOnChange} theme={reactLiveTheme} />
            </MoBrowserMockup>
          </div>
        </Slide>
      </Grid>
      <Grid item md={md} sm={sm} xs={12}>
        <Slide
          direction="left"
          in={(question.isPlayground && true) || (question.question && true)}
          mountOnEnter
          timeout={{ enter: 800, exit: 800 }}
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

export default LiveProviderCore;
