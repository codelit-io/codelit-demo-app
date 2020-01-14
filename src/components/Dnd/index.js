import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import MoComponent from "../ComponentMaker/MoComponent";
import Input from "@material-ui/core/Input";
// fake data generator
// const generateItems = (count, offset = 0) =>
// 	Array.from({ length: count }, (v, k) => k).map(k => ({
// 		id: `item-${k + offset}`,
// 		content: `item ${k + offset}`,
// 		code: `<h1> I am a Heading 1</h1>`
// 	}));

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

class Dnd extends Component {
	state = {
		items: [
			{ id: "0", label: "Button", element: "button", code: "<button> I am a Button </button>" },
			{ id: "1", label: "Paragraph" , element: "typography", code: "<p> I am a Paragraph </p>" },
			{ id: "2", label: "Input" , element: "input", code: "<input value='I am an Input' type='text' />" },
			{ id: "3", label: "Switch" , element: "switch", code: "<switch> I am a Material switch </switch>" },
			{ id: "4", label: "Checkbox" , element: "checkbox", code: "<input type='checkbox' /> I am a checkbox" },
			{ id: "5", label: "Slider" , element: "slider", code: "<Slider > I am a Material Slider </Slider>" },
			{ id: "6", label: "Html Link" , element: "link", code: "<a href='moskool.com'> I am an html link </a>" }
		],
		selected: [{ id: "7", label: "Drop Elements Here" , element: "typography", code: "I am Awesome! 😎"}]
	};
	// state = {
	// 	items: generateItems(10),
	// 	selected: generateItems(5, 10)
	// };
	/**
	 * A semi-generic way to handle multiple lists. Matches
	 * the IDs of the droppable container to the names of the
	 * source arrays stored in the state.
	 */
	id2List = {
		droppable: "items",
		droppable2: "selected"
	};

	getList = id => this.state[this.id2List[id]];

	onDragEnd = result => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				this.getList(source.droppableId),
				source.index,
				destination.index
			);

			let state = { items };

			if (source.droppableId === "droppable2") {
				state = { selected: items };
			}

			this.setState(state);
		} else {
			const result = move(
				this.getList(source.droppableId),
				this.getList(destination.droppableId),
				source,
				destination
			);

			this.setState({
				items: result.droppable,
				selected: result.droppable2
			});
		}
	};

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={6}>
						<Droppable droppableId="droppable">
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									style={getListStyle(snapshot.isDraggingOver)}
								>
									{this.state.items.map((item, index) => (
										<Draggable
											key={item.id}
											draggableId={item.id}
											index={index}
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={style(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
													<h4>{item.label}</h4>
                                                    <Input value={item.code} style={{width: "100%"}}><pre>{item.code}</pre></Input>
													
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Droppable droppableId="droppable2">
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									style={getListStyle(snapshot.isDraggingOver)}
								>
									{this.state.selected.map((item, index) => (
										<Draggable
											key={item.id}
											draggableId={item.id}
											index={index}
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={style(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
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
					</Grid>
				</Grid>
			</DragDropContext>
		);
	}
}

export default Dnd;
