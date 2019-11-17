import React from "react";
import DraggableItem from "../DraggableItem";

const DraggableItemList = React.memo(function DraggableItemList({
	draggableItems
}) {
	return draggableItems.map((draggableItem, index) => (
		<DraggableItem
			draggableItem={draggableItem}
			index={index}
			key={draggableItem.id}
		/>
	));
});

export default DraggableItemList;
