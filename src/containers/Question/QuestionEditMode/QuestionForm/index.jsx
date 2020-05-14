import React, { lazy, useState } from "react";

import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeaderEdit from "components/shared/MoPageHeaderEdit";
import MoSpinner from "components/shared/MoSpinner";
import MoPageSubtitleEdit from "components/shared/MoPageSubtitleEdit";
import { useCallback } from "react";

const CodeEditor = lazy(() => import("components/CodeEditor"));

const QuestionForm = ({
	classes,
	children,
	isLoading,
	question,
	subtitle,
	title,
}) => {
	const { handleSubmit, register } = useForm();

	const [formData, setFormData] = useState({
		label: "Master React Course",
		desc:
			"A series of questions to learn advanced courses in react such as React hooks and Context API",
		id: "0",
		question: "<h1>Hello World</h1>",
	});

	// const handleChange = (e) => {
	//   setValue("AntdInput", e.target.value);
	// }

	const handleOnChange = useCallback(
		(userAnswer) => {
			setFormData((preState) => ({ ...preState, question: userAnswer }));
		},
		[setFormData]
	);

	const onSubmit = (formData) => {
		console.log(formData);
		if (formData.label) {
			// const id = formData?.label.replace(/\s+/g, "-").toLowerCase();
			// const payload = {
			//   ...formData,
			//   id,
			//   useId: authUser.uid,
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
					<MoPageHeaderEdit title={title} register={register} name="label" />
				)}
				{subtitle && (
					<MoPageSubtitleEdit
						subtitle={subtitle}
						register={register}
						name="desc"
					/>
				)}
			</section>
			<section>
				{question && (
					<CodeEditor
						handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
						sm={6}
						md={6}
						question={question}
						name="trdt"
					/>
				)}
			</section>
			<section>{children}</section>
			<section>
				<Button type="submit" color="primary">
					Save
				</Button>
				{formData.label}
			</section>
		</form>
	);
};

export default compose(withRouter, withStyles(styles))(QuestionForm);
