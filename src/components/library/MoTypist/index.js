/**
 * MoTypist
 * Uses react-typist dependecy to render the typist effect on text it can be customiszed if needed
 *
 * @param {String} text - text that will have the typist effect
 * @return {<Typist></Typist>}
 */

import React from "react";
import Typist from "react-typist";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) =>
  createStyles({
    hint: {
      ...theme.editorFont,
      // color: "inherit",
      top: "2.25rem",
      position: "absolute",
      zIndex: "-1",
      padding: "0.625rem",
    },
  })
);

const MoTypist = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.hint}>
      <Typist
        avgTypingDelay={60}
        stdTypingDelay={30}
        startDelay={800}
        cursor={{
          show: true,
          blink: false,
          hideWhenDone: true,
        }}
      >
        {text}
      </Typist>
    </div>
  );
};

export default MoTypist;
