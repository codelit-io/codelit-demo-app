import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItemList from "../DraggableItemList";
import { reorder } from "../reorder";
import { Grid } from "@material-ui/core";
import { move } from "../move";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import Title from "../../../shared/Title";
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
						<Title text={!index ? "Input Queue" : "Completed" } fade={list}/>
						<Droppable droppableId={list} style={{ maxHeight: "500px" }}>
							{provided => (
								<span ref={provided.innerRef} {...provided.droppableProps}>
									<DraggableItemList
										draggableItems={lists[list]}
										listId={list}
										setNewLists={setNewLists}
										classes={classes}
									/>
									{list === "rightList" && (
										<div
											style={{ minHeight: 400, border: "20px dashed #e6e6e6" }}
										>
											{" "}
											<Typography
												variant="h4"
												gutterBottom
												className={classes.dropZone}
											>
												<Box
													fontWeight="fontWeightLight"
													className={classes.dropZone}
												>
													Drop Here for preview <span role="img" aria-label="hand pointing down">👇</span>
												</Box>
											</Typography>
										</div>
									)}
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
