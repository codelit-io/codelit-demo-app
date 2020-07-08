/**
 * Single Question is code editor, code preview and error console. This container fetches a single question
 * @param {Object} question - Question object
 */

import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import createStyles from "@material-ui/core/styles/createStyles";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";

const QuestionPageNav = ({ leftArrowClick, rightArrowClick, question
}) => {


    const useStyles = makeStyles(theme =>
        createStyles({
            leftArrow: { color: question.id === 1 ? theme.grey.superLight : theme.grey.medium },
            rightArrow: { color: theme.grey.medium },
        })
    );

    const classes = useStyles();

    if (!question.id) {
        return null;
    }

    return (
        <ButtonGroup
            variant="text"
            aria-label="text primary button group"
        >
            <Button
                className={classes.leftArrow}
                startIcon={<KeyboardArrowLeftIcon />}
                onClick={() => rightArrowClick()} />
            <Button>{question.id}</Button>
            <Button
                className={classes.rightArrow}
                startIcon={<KeyboardArrowRightIcon />}
                onClick={() => leftArrowClick()} />
        </ButtonGroup>
    )
};

export default QuestionPageNav;

