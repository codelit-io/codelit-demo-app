import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItemList from "../DraggableItemList";
import { reorder } from "../reorder";
import { Grid } from "@material-ui/core";
import { move } from "../move";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
/* A semi-generic way to handle multiple lists. Matches
 * the IDs of the droppable container to the names of the
 * source arrays stored in the state.
 */

const DraggableContainer = ({ data, classes }) => {
	const [lists, setLists] = useState(data);

	const getList = id => {
		return lists[id];
	};

	const onDragEnd = result => {
		const { source, destination } = result;
		// dropped outside the list
		if (!destination) {
			return;
		}
		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				getList(source.droppableId),
				source.index,
				destination.index
			);

			let newLists = { leftList: items };

			if (source.droppableId === "rightList") {
				newLists = { rightList: items };
			}

			setLists({ ...lists, ...newLists });
		} else {
			const result = move(
				getList(source.droppableId),
				getList(destination.droppableId),
				source,
				destination
			);
			setLists({ ...lists, ...result });
		}
	};

	const setNewLists = item => {
		setLists({ ...lists });
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Grid container spacing={3}>
				{Object.keys(lists).map((list, index) => (
					<Grid key={index} item xs={12} sm={6} md={6} lg={6}>
						<Typography variant="h4" gutterBottom className={classes.header}>
							<Box fontWeight="fontWeightLight" className={classes.linkText}>
								{list === "leftList" ? "Input Queue" : "Completed"}
							</Box>
						</Typography>
						<Droppable droppableId={list}>
							{provided => (
								<span ref={provided.innerRef} {...provided.droppableProps}>
									<DraggableItemList
										draggableItems={lists[list]}
										listId={list}
										setNewLists={setNewLists}
										classes={classes}
									/>
									{provided.placeholder}
								</span>
							)}
						</Droppable>
					</Grid>
				))}
			</Grid>
		</DragDropContext>
	);
};

export default withStyles(styles)(DraggableContainer);
