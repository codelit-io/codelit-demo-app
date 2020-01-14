import React from "react";

import Card from "@material-ui/core/Card";
import MoComponent from "../../MoComponent";
import { Draggable } from "react-beautiful-dnd";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
	card: {
		marginBottom: theme.spacing(2),
		padding: theme.spacing(2)
	}
});

const DraggableItemBase = ({ draggableItem, index, classes }) => {
	return (
		<Draggable draggableId={draggableItem.id} index={index}>
			{provided => (
				<Card
					className={classes.card}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<MoComponent {...draggableItem}></MoComponent>
				</Card>
			)}
		</Draggable>
	);
};
const DraggableItem = withStyles(styles)(DraggableItemBase);

export default DraggableItem;
