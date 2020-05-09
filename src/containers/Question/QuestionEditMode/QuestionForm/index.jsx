import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import MoPageHeaderEdit from "../../../../components/shared/MoPageHeaderEdit";
import MoSpinner from "../../../../components/shared/MoSpinner";
import MoPageSubtitleEdit from "../../../../components/shared/MoPageSubtitleEdit";

const QuestionForm = ({ classes, children, isLoading, subtitle, title }) => {
	const { control, handleSubmit, register } = useForm();

	const [formData] = useState({
		label: "Master React Course",
		desc:
			"A series of questions to learn advanced courses in react such as React hooks and Context API",
		id: "0",
	});

	// const handleChange = (e) => {
	//   setValue("AntdInput", e.target.value);
	// }

	const onSubmit = (formData) => {
		console.log(formData);
		if (formData.label) {
			const id = formData?.label.replace(/\s+/g, "-").toLowerCase();
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
		<section className={classes.section}>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				{children}
				<Button type="submit" color="primary">
					Save
				</Button>
			</form>
		</section>
	);
};

export default compose(withRouter, withStyles(styles))(QuestionForm);
