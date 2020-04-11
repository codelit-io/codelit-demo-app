import React, { useCallback, useState } from "react";
import MoFormDialog from "../../shared/MoFormDialog";
import TextField from "@material-ui/core/TextField";

const AddCourse = () => {
	const [formData, setFormData] = useState({
		label: "Master React Course",
		desc:
			"A series of questions to learn advanced topics in react such as React hooks and Context API",
	});

	const handleEventValue = (value) => {
		console.log(value);
	};

	const Form = () => {
		return (
			<>
				<TextField
					autoFocus
					margin="dense"
					id="label"
					label="Course Title"
					type="text"
					onChange={(e) => {
						let value = e.target?.value;
						setFormData((prevState) => {
							return { ...prevState, label: value };
						});
					}}
					placeholder={formData?.label}
					fullWidth
				/>
				<TextField
					margin="dense"
					id="desc"
					label="Course Short Description"
					type="text"
					placeholder={formData?.desc}
					onChange={(e) => {
						let value = e.target?.value;
						setFormData((prevState) => {
							return { ...prevState, desc: value };
						});
					}}
					fullWidth
				/>
			</>
		);
	}   ;

	console.log(handleEventValue);
	return <MoFormDialog handleEventValue={(value) => handleEventValue(value)} Form={Form}/>;
};

export default AddCourse;
