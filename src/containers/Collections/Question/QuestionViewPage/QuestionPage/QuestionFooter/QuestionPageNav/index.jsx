/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Question Page Nav
 *
 *
 * Navigation for a single question UI. Navigate between questions
 *
 * @param {CallableFunction} prevClick - Previous click callback
 * @param {CallableFunction} nextClick - Next click callback
 * @param {String | Number} id - current question id
 * @param {Boolean} isCorrect - flag if question was answered correctly
 */

import React from "react";

import IconButton from "@material-ui/core/IconButton";

import Fade from "@material-ui/core/Fade";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const QuestionPageNav = ({ prevClick, isAdmin, isCorrect, id, nextClick }) => {
  const isDisabled = !isCorrect;

  if (!id) {
    return null;
  }
  return (
    <Fade in>
      <div>
        <IconButton
          aria-label="Go to previous question"
          aria-haspopup="true"
          disabled={id === 1}
          onClick={() => prevClick()}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton
          aria-label="current question"
          aria-haspopup="true"
          disabled={true}
          size="small"
        >
          {id}
        </IconButton>
        {isAdmin ? (
          <IconButton
            aria-label="Go to next question"
            aria-haspopup="true"
            onClick={() => nextClick()}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Go to next question"
            aria-haspopup="true"
            disabled={isDisabled}
            onClick={() => nextClick()}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        )}
      </div>
    </Fade>
  );
};

export default QuestionPageNav;
