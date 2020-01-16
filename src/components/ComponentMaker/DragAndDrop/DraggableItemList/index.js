import React from "react";
import DraggableItem from "../DraggableItem";

const DraggableItemList = React.memo(function DraggableItemList({
	draggableItems, listId, setNewLists
}) {

	const setNewListsTest = () => setNewLists
	return draggableItems.map((draggableItem, index) => (
		<DraggableItem
			listId={listId}
			draggableItem={draggableItem}
			index={index}
			key={draggableItem.id}
			setNewLists={setNewListsTest}
		/>
	));
});

export default DraggableItemList;
