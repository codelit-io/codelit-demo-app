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
import Tooltip from "@material-ui/core/Tooltip";

const QuestionPageNav = ({ prevClick, isAdmin, isCorrect, id, nextClick }) => {
  const isDisabled = !isCorrect;

  if (!id) {
    return null;
  }
  return (
    <Fade in>
      <div>
        <Tooltip title="Previous question" placement="top">
          <span>
            <IconButton
              aria-label="Previous question"
              aria-haspopup="true"
              disabled={id === 1}
              onClick={() => prevClick()}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Current question" placement="top">
          <span>
            <IconButton
              aria-label="Current question"
              aria-haspopup="true"
              disabled={true}
              size="small"
            >
              {id}
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Next question" placement="top">
          <span>
            {isAdmin ? (
              <IconButton
                aria-label="Next question"
                aria-haspopup="true"
                onClick={() => nextClick()}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Next question"
                aria-haspopup="true"
                disabled={isDisabled}
                onClick={() => nextClick()}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            )}
          </span>
        </Tooltip>
      </div>
    </Fade>
  );
};

export default QuestionPageNav;
