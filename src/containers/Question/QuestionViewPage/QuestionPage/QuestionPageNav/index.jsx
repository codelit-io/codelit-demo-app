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
import createStyles from "@material-ui/core/styles/createStyles";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";

const QuestionPageNav = ({ prevClick, nextClick, question }) => {
  const useStyles = makeStyles(theme =>
    createStyles({
      leftArrow: {
        color: question.id === 1 ? theme.grey.superLight : theme.grey.medium
      },
      rightArrow: { color: theme.grey.medium }
    })
  );

  const classes = useStyles();

  if (!question.id) {
    return null;
  }

  return (
    <ButtonGroup variant="text" aria-label="text primary button group">
      <Button
        disabled={question.id === 1}
        className={classes.leftArrow}
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={() => prevClick()}
      />
      <Button disabled>{question.id}</Button>
      <Button
        disabled={!question.isCorrect}
        className={classes.rightArrow}
        startIcon={<KeyboardArrowRightIcon />}
        onClick={() => nextClick()}
      />
    </ButtonGroup>
  );
};

export default QuestionPageNav;
