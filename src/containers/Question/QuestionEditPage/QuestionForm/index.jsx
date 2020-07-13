import React, { lazy } from "react";

import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useCallback } from "react";
import Button from "@material-ui/core/Button";
import MoPageHeaderEdit from "components/library/MoPageHeaderEdit";
import MoSpinner from "components/library/MoSpinner";
import MoHintEdit from "components/library/MoHintEdit";
import MoPageContentEdit from "components/library/MoPageContentEdit";
import MoTypography from "components/library/MoTypography";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

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

  const handleChange = useCallback((code) => {
    const userAnswer = { ...Object.values(code) };
    if (userAnswer[0] === "{}" || userAnswer[0] === "") {
      return;
    }
    setQuestion({ ...question, ...code });
  },
    [setQuestion, question]
  );

  if (isLoading || !question) {
    return <MoSpinner isLoading={isLoading} color="primary" />;
  }

  return (
    <form onSubmit={handleSubmit(e => onSubmit({ ...e, ...question }))}>
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
      {/* {question && ( */}
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
          codeQuestion={question?.question || {}}
          isConsole={true}
          isEditMode={true}
          noInline={false}
          isPlayground={question?.isPlayground}
          handleOnChange={code => handleChange({ question: code.userAnswer })}
          sm={6}
          md={6}
        />
      </section>
      {/* )} */}
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
            handleOnChange={code => handleChange({ answer: code.userAnswer })}
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
