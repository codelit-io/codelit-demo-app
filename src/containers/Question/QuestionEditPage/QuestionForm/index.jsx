import React, { lazy } from "react";

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
  navToQuestionViewPage,
  onSubmit
}) => {
  const { handleSubmit, register } = useForm();

  const handleChange = useCallback(({ userAnswer, key }) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    setQuestion({ ...question, [key]: userAnswer });
  },
    [setQuestion, question]
  );

  console.log(question)
  if (isLoading || !question) {
    return <MoSpinner isLoading={isLoading} color="primary" />;
  }
  return (
    <form onSubmit={handleSubmit(e => onSubmit({ ...question, ...e }))}>
      <section className={classes.section}>
        <MoPageHeaderEdit
          text={title}
          register={register}
          name="title"
          placeholder={"Html Paragraph"}
        />
        <MoPageContentEdit
          text={label}
          register={register}
          name="label"
          placeholder={"Create a paragraph open tag in html"}
        />
        <MoHintEdit
          text={subtitle}
          register={register}
          name="subtitle"
          placeholder={"<p>"}
        />
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
            isConsole={true}
            isEditMode={true}
            noInline={false}
            isPlayground={question?.isPlayground}
            handleOnChange={userAnswer => handleChange(userAnswer, "question")}
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
            isConsole={true}
            isEditMode={true}
            noInline={false}
            isPlayground={question?.isPlayground}
            handleOnChange={userAnswer => handleChange(userAnswer, "answer")}
            sm={6}
            md={6}
          />
        </section>
      )}

      {children && <section className={classes.section}>{children}</section>}
      {question && (
        <section className={classes.section}>
          <Button
            type="button"
            color="default"
            onClick={() => navToQuestionViewPage()}
          >
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
