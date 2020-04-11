import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const MoFormDialog = ({ Form, handleEventValue }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const [isOpen, setIsOpen] = useState(false);

	const handleClickOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(false);
		handleEventValue(e.target.value);
	};

	return (
		<>
			<Tooltip title="Add New Course" arrow>
				<IconButton
					aria-label="Add Course"
					aria-haspopup="true"
					onClick={handleClickOpen}
				>
					<PostAddIcon />
				</IconButton>
			</Tooltip>
			<Dialog
				aria-labelledby="form-dialog"
				fullScreen={fullScreen}
				open={isOpen}
				onClose={handleClose}
			>
				<form onSubmit={(e) => handleSubmit(e)}>
					<DialogTitle id="form-dialog">Add New Course</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Short title and description for your new course
						</DialogContentText>
						<Form />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="default">
							Cancel
						</Button>
						<Button type="submit" color="primary">
							Create
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default MoFormDialog;
