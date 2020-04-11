/**
 * !!Still Work in Progress!!
 * Dialog shell with state to handle open and closing the Dialog
 * It takes an input of a component and renders it inside the Dialog
 *
 * @param {<Component handleDialogState={(isOpen) => setIsOpenState(isOpen)} />}
 * @return {<Dialog></Dialog>}
 */

import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const MoFormDialog = ({ Component }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [isOpenState, setIsOpenState] = useState(false);
	return (
		<>
			<Tooltip title="Add New Course" arrow>
				<IconButton
					aria-label="Add Course"
					aria-haspopup="true"
					onClick={() => setIsOpenState(true)}
				>
					<PostAddIcon />
				</IconButton>
			</Tooltip>
			<Dialog
				aria-labelledby="form-dialog"
				fullScreen={fullScreen}
				open={isOpenState}
				onClose={() => setIsOpenState(false)}
			>
				{Component && (
					<Component handleDialogState={(isOpen) => setIsOpenState(isOpen)} />
				)}
			</Dialog>
		</>
	);
};

export default MoFormDialog;
