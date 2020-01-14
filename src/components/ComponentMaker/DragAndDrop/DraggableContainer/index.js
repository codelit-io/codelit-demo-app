import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItemList from "../DraggableItemList";
import { reorder } from "../reorder.js";
import { Grid } from "@material-ui/core";

const DraggableContainer = ({ list }) => {
	const initial = list.map((item, index) => {
		const custom = {
			id: `${item}${index}`,
			element: item
		};
		return custom;
	});

	const [state, setState] = useState({ draggableItems: initial });

	const onDragEnd = result => {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		const draggableItems = reorder(
			state.draggableItems,
			result.source.index,
			result.destination.index
		);

		setState({ draggableItems });
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Droppable droppableId="list">
						{provided => (
							<span ref={provided.innerRef} {...provided.droppableProps}>
								<DraggableItemList draggableItems={state.draggableItems} />
								{provided.placeholder}
							</span>
						)}
					</Droppable>
				</Grid>
			</Grid>
		</DragDropContext>
	);
};

export default DraggableContainer;
