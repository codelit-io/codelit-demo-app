import React from "react";

import Card from "@material-ui/core/Card";
import Component from "../../Component";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	card: {
		marginBottom: theme.spacing(2),
		padding: theme.spacing(2)
	}
});

const DraggableItem = ({ draggableItem, index, classes }) => {
	return (
		<Draggable draggableId={draggableItem.id} index={index}>
			{provided => (
				<Card
					className={classes.card}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Component {...draggableItem}></Component>
				</Card>
			)}
		</Draggable>
	);
};

export default withStyles(styles)(DraggableItem);
