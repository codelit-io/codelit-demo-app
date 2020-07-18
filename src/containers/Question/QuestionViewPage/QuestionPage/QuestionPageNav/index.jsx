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
 * @param {Object} question - Question object
 */

import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const QuestionPageNav = ({ prevClick, isAdmin, nextClick, question }) => {
  const isDisabled = !question.isCorrect;

  if (!question.id) {
    return null;
  }
  return (
    <ButtonGroup variant="text" aria-label="text primary button group">
      <Button
        disabled={question.id === 1}
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={() => prevClick()}
      />
      <Button disabled>{question.id}</Button>
      {isAdmin ? (
        <Button
          startIcon={<KeyboardArrowRightIcon />}
          onClick={() => nextClick()}
        />
      ) : (
        <Button
          disabled={isDisabled}
          startIcon={<KeyboardArrowRightIcon />}
          onClick={() => nextClick()}
        />
      )}
    </ButtonGroup>
  );
};

export default QuestionPageNav;
