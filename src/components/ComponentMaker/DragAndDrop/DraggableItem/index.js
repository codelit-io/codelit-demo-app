import React from "react";

import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import { Draggable } from "react-beautiful-dnd";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import MoComponent from "../../MoComponent";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	card: {
		marginBottom: theme.spacing(2),
		padding: theme.spacing(4),
		userSelect: "none",
		borderRadius: 5,
		boxShadow: "0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(0,0,0,.05)",
		// change background colour if dragging
		background: "white"
	}
});

const DraggableItemBase = ({ draggableItem, index, classes, listId, setNewLists }) => {

	const handleOnChagne = event => {
		if (
			event.target.value.replace(/\s/g, "") ===
			draggableItem.answer.replace(/\s/g, "")
		) {
			setNewLists(
				{ ...draggableItem },
				(draggableItem.status = <CheckIcon />)
			);
		}
	};
	
	return (
		<Draggable
			key={draggableItem.id}
			draggableId={draggableItem.id}
			index={index}
		>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={classes.card}
				>
					<Grid container style={{ alignItems: "center" }}>
						<Grid item sm={1} md={2}>
							<Avatar>{draggableItem.id}</Avatar>
						</Grid>
						<Grid item sm={8} md={8}>
							<h4>{draggableItem.label}</h4>
						</Grid>
						<Grid item sm={2} md={2}>
							{draggableItem && draggableItem.status && (
								<div style={{ fontSize: "30px", float: "right" }}>
									{draggableItem.status}
								</div>
							)}
						</Grid>
					</Grid>
					{listId === "items" ? (
						<FormControl margin="normal" required fullWidth>
							{/* <InputLabel htmlFor="question">
												<CodeIcon />
											</InputLabel> */}
							<Input
								id={draggableItem.id}
								name={draggableItem.id}
								type="text"
								onChange={handleOnChagne}
								defaultValue={draggableItem.question}
								// inputProps={{
								// 	maxLength: item.answer.length
								// }}
							/>
						</FormControl>
					) : (
						<MoComponent {...draggableItem}></MoComponent>
					)}
				</div>
			)}
		</Draggable>
	);
};
const DraggableItem = withStyles(styles)(DraggableItemBase);

export default DraggableItem;
