import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CustomElement from "../../CustomElement";

const useStyles = makeStyles(theme =>
	createStyles({
		card: {
			marginBottom: theme.spacing(2),
			padding: theme.spacing(2)
		}
	})
);
const DraggableItem = ({ draggableItem, index }) => {
	const classes = useStyles();
	return (
		<Draggable draggableId={draggableItem.id} index={index}>
			{provided => (
				<Card
					className={classes.card}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<CustomElement { ...draggableItem }></CustomElement>
				</Card>
			)}
		</Draggable>
	);
};

export default DraggableItem;
