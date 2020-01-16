import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CodeIcon from "@material-ui/icons/Code";
import CheckIcon from "@material-ui/icons/Check";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/FormControl";
import MoComponent from "../../ComponentMaker/MoComponent";
import Typography from "@material-ui/core/Typography";

// fake data generator
/* const generateItems = (count, offset = 0) =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${k + offset}`,
		content: `item ${k + offset}`,
		code: `<h1> I am a Heading 1</h1>`
	})); */

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};

const grid = 8;

const style = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	boxShadow: "0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(0,0,0,.05)",
	// change background colour if dragging
	background: "white",
	// styles we need to apply on draggables
	...draggableStyle
});

const getListStyle = isDraggingOver => ({
	// background: isDraggingOver ? "rgba(0,0,0,.05)" : "white",
	padding: grid
});

const DndList = props => {
	const [state, setState] = useState(props);
	// state = {
	// 	items: generateItems(10),
	// 	selected: generateItems(5, 10)
	// };
	/**
	 * A semi-generic way to handle multiple lists. Matches
	 * the IDs of the droppable container to the names of the
	 * source arrays stored in the state.
	 */
	const id2List = {
		droppable: "items",
		droppable2: "selected"
	};

	const getList = id => state[id2List[id]];



	const handleOnChagne = event => {
		if (event.target.value.replace(/\s/g, "") === state.items[event.target.id].answer.replace(/\s/g, "")) {
			setState({ ...state }, (state.items[event.target.id].status = <CheckIcon />));
		}
	};

	return (
		/* DND LIST 1 */
		<>
		<Droppable droppableId="droppable">
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					style={getListStyle(snapshot.isDraggingOver)}
				>
					{state.items.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} index={index}>
							{(provided, snapshot) => (
								/* ********************** EACH ITEM/CAD in the drop in drag ********************** */
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									style={style(
										snapshot.isDragging,
										provided.draggableProps.style
									)}
								>
									<Grid container style={{ alignItems: "center" }}>
										<Grid item sm={1} md={1}>
											<Avatar>{item.id}</Avatar>
										</Grid>
										<Grid item sm={9} md={9}>
											<h4>{item.label}</h4>
										</Grid>
										<Grid item sm={2} md={2}>
											{item && item.status && (
												<div style={{ fontSize: "30px", float: "right" }}>
													{item.status}
												</div>
											)}
										</Grid>
									</Grid>
									<FormControl margin="normal" required fullWidth>
										{/* <InputLabel htmlFor="question">
									<CodeIcon />
								</InputLabel> */}
										<Input
											id={item.id}
											name={item.id}
											type="text"
											onChange={handleOnChagne}
											defaultValue={item.question}
											// inputProps={{
											// 	maxLength: item.answer.length
											// }}
										/>
									</FormControl>
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>

		/*  DND LIST 2 */

		<Droppable droppableId="droppable2">
		{(provided, snapshot) => (
			<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
				{state.selected.map((item, index) => (
					<Draggable key={item.id} draggableId={item.id} index={index}>
						{(provided, snapshot) => (
							<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={style(snapshot.isDragging, provided.draggableProps.style)}>
								<h4> {item.label} </h4>
								<MoComponent {...item}></MoComponent>
							</div>
						)}
					</Draggable>
				))}
				{provided.placeholder}
			</div>
		)}
	</Droppable>
							</>
	);
};

export default DndList;
