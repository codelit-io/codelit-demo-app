/**
 * !!Still Work in Progress!!
 * Add course form uses react-hook-form and Material Dialog elements
 * This form shows up in dialogs and it creates new Course
 * 
 * @return {<form></form>}
 */

import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { Controller, useForm } from "react-hook-form";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MoFormDialog from "../../shared/MoFormDialog";
import TextField from "@material-ui/core/TextField";

const AddCourse = () => {
	const { control, register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	const [formData] = useState({
		label: "Master React Course",
		desc:
			"A series of questions to learn advanced topics in react such as React hooks and Context API",
	});

	const Form = ({ handleDialogState }) => {
		const handleDialog = () => {
			handleDialogState(false);
		};
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogTitle id="form-dialog">Add New Course</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Short title and description for your new course
					</DialogContentText>
					<Controller
						as={<TextField autoFocus fullWidth margin="dense" />}
						name="label"
						control={control}
						defaultValue=""
						placeholder={formData.label}
					/>
					<Controller
						as={<TextField fullWidth margin="dense" />}
						name="desc"
						control={control}
						defaultValue=""
						placeholder={formData.desc}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleDialog()} color="default">
						Cancel
					</Button>
					<Button type="submit" color="primary">
						Create
					</Button>
				</DialogActions>
			</form>
		);
	};

	return <MoFormDialog Component={Form} />;
};

export default AddCourse;
