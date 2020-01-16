import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItemList from "../DraggableItemList";
import { reorder } from "../reorder";
import { Grid } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { move } from "../move";
/* A semi-generic way to handle multiple lists. Matches
 * the IDs of the droppable container to the names of the
 * source arrays stored in the state.
 */

const DraggableContainer = ({ data }) => {
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
			
			debugger;
			let newLists = { items };

			if (source.droppableId === "selected") {
				newLists = { selected: items };
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

	const setNewLists = (result) => {
		console.log(result)
		// setLists({ ...lists, ...result });
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Grid container spacing={3}>
				{Object.keys(lists).map((list, index) => (
					<Grid key={index} item xs={12} sm={6} md={6} lg={4}>
						<Droppable droppableId={list}>
							{provided => (
								<span ref={provided.innerRef} {...provided.droppableProps}>
									<DraggableItemList draggableItems={lists[list]} listId={list} setNewLists={setNewLists} />
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

export default DraggableContainer;
