import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableItemList from "../DraggableItemList";
import { reorder } from "../reorder.js";

const DraggableContainer = props => {
	const initial = props.list.map(item => {
		const custom = {
			id: item,
			content: item
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
			<Droppable droppableId="list">
				{provided => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<DraggableItemList draggableItems={state.draggableItems} />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default DraggableContainer;
