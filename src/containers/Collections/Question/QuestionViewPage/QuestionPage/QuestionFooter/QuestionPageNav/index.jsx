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

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const QuestionPageNav = ({ prevClick, isAdmin, isCorrect, id, nextClick }) => {
  const isDisabled = !isCorrect;

  if (!id) {
    return null;
  }
  return (
    <ButtonGroup variant="text" aria-label="text primary button group">
      <Button
        disabled={id === 1}
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={() => prevClick()}
      />
      <Button disabled>{id}</Button>
      {isAdmin ? (
        <Button
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => nextClick()}
        />
      ) : (
        <Button
          disabled={isDisabled}
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => nextClick()}
        />
      )}
    </ButtonGroup>
  );
};

export default QuestionPageNav;
