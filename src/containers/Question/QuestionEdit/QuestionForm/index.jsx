import React, { lazy, useState } from "react";

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
import MoPageContent from "components/library/MoPageContent";
import MoPageContentEdit from "components/library/MoPageContentEdit";

const CodeEditor = lazy(() => import("components/shared/CodeEditor"));

const QuestionForm = ({
  classes,
  children,
  isLoading,
  label,
  question,
  subtitle,
  setQuestion,
  title
}) => {
  const { handleSubmit, register } = useForm();

  const [formData, setFormData] = useState({
    label: "Master React Course",
    desc:
      "A series of questions to learn advanced courses in react such as React hooks and Context API",
    id: "0",
    question: "<h1>Hello World</h1>"
  });

  const handleQuestionChange = useCallback(
    ({ userAnswer }) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }
      setFormData(preState => ({ ...preState, question: userAnswer }));
      setQuestion({ ...question, question: userAnswer });
    },
    [setFormData, setQuestion, question]
  );

  const handleAnswerChange = useCallback(
    ({ userAnswer }) => {
      if (userAnswer === "{}" || userAnswer === "") {
        return;
      }
      setFormData(preState => ({ ...preState, answer: userAnswer }));
      setQuestion({ ...question, answer: userAnswer });
    },
    [setFormData, setQuestion, question]
  );

  const onSubmit = data => {
    console.log({ ...formData, ...data });
    if (formData.label) {
      // const id = formData?.label.replace(/\s+/g, "-").toLowerCase();
      // const payload = {
      //   ...formData,
      //   id,
      //   userId: authUser.uid,
      //   createdAt: firebase.fieldValue.serverTimestamp(),
      // };
      // firebase.collection("courses").doc(id).set(payload, { merge: true });
      // handleDialogState(false);
      // history.push(`/courses/${id}`);
    }
  };

  if (isLoading) {
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
				{MoHintEdit && (
					<MoHintEdit text={subtitle} register={register} name="subtitle" />
				)}
			</section>
			<section className={classes.bodySection}>
				<>
					<MoPageContent text={"Question"} />
					{question && (
						<CodeEditor
							codeAnswer={"Write Question Here"}
							codeLanguage={question?.language}
							codeQuestion={question?.question}
							isEditMode={true}
							isPlayground={question?.isPlayground}
							handleOnChange={(userAnswer) => handleQuestionChange(userAnswer)}
							sm={6}
							md={6}
						/>
					)}
				</>
			</section>
			<section className={classes.bodySection}>
				<MoPageContent text={"Answer"} />
				{question && (
					<CodeEditor
						codeAnswer={"Answer"}
						codeLanguage={question?.language}
						codeQuestion={question?.answer}
						isEditMode={true}
						isPlayground={question?.isPlayground}
						handleOnChange={(userAnswer) => handleAnswerChange(userAnswer)}
						sm={6}
						md={6}
					/>
				)}
			</section>
			<section>{children}</section>
			<section>
				<Button type="submit" color="primary">
					Save
				</Button>
			</section>
		</form>
	);
};

export default compose(withRouter, withStyles(styles))(QuestionForm);
