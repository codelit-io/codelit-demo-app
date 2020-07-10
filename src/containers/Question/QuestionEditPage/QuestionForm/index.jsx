import React, { lazy, useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeaderEdit from "components/library/MoPageHeaderEdit";
import MoSpinner from "components/library/MoSpinner";
import { useCallback } from "react";
import MoHintEdit from "components/library/MoHintEdit";
import MoPageContentEdit from "components/library/MoPageContentEdit";
import MoTypography from "components/library/MoTypography";

const CodeEditor = lazy(() => import("components/shared/CodeEditor"));

const QuestionForm = ({
  classes,
  children,
  isLoading,
  label,
  question,
  subtitle,
  setQuestion,
  title,
  viewQuestion,
  onSubmit
}) => {
  const { handleSubmit, register } = useForm();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(question);
  }, [question]);

  const handleQuestionChange = useCallback(
    ({ userAnswer }) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }
      setFormData(preState => ({ ...preState, question: userAnswer }));
      setQuestion({ ...question, question: userAnswer });
    },
    [setQuestion, question]
  );

  const handleAnswerChange = useCallback(
    ({ userAnswer }) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }
      setFormData(preState => ({ ...preState, answer: userAnswer }));
      setQuestion({ ...question, answer: userAnswer });
    },
    [setQuestion, question]
  );

  if (isLoading && formData) {
    return <MoSpinner isLoading={isLoading} color="primary" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className={classes.section}>
        {title && (
          <MoPageHeaderEdit text={title} register={register} name="title" />
        )}
        {label && (
          <MoPageContentEdit text={label} register={register} name="label" />
        )}
        {subtitle && (
          <MoHintEdit text={subtitle} register={register} name="subtitle" />
        )}
      </section>

      {question && (
        <section className={classes.section}>
          <MoTypography
            color="grey"
            font="breeSerif"
            marginBottom="sm"
            variant="h6"
          >
            Question
          </MoTypography>
          <CodeEditor
            codeAnswer={"Write Question Here"}
            codeLanguage={question?.language}
            codeQuestion={question?.question}
            isEditMode={true}
            isPlayground={question?.isPlayground}
            handleOnChange={userAnswer => handleQuestionChange(userAnswer)}
            sm={6}
            md={6}
          />
        </section>
      )}

      {question && (
        <section className={classes.section}>
          <MoTypography
            color="grey"
            font="breeSerif"
            marginBottom="sm"
            variant="h6"
          >
            Answer
          </MoTypography>
          <CodeEditor
            codeAnswer={"Answer"}
            codeLanguage={question?.language}
            codeQuestion={question?.answer}
            isEditMode={true}
            isPlayground={question?.isPlayground}
            handleOnChange={userAnswer => handleAnswerChange(userAnswer)}
            sm={6}
            md={6}
          />
        </section>
      )}

      {children && <section className={classes.section}>{children}</section>}
      {question && (
        <section className={classes.section}>
          <Button type="button" color="default" onClick={() => viewQuestion()}>
            Back to Question
          </Button>
          <Button
            onKeyPress={e => {
              e.key === "Enter" && e.preventDefault();
            }}
            type="submit"
            color="primary"
          >
            Save
          </Button>
        </section>
      )}
    </form>
  );
};

export default compose(withRouter, withStyles(styles))(QuestionForm);
