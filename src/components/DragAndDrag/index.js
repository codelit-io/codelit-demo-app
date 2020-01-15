import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import MoComponent from "../ComponentMaker/MoComponent";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/FormControl";
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
			{
				id: "0",
				label: "Button",
				element: "button",
				question: "<button> I am a Button <button> ",
				answer: "<button> I am a Button </button>",
				status: "😴"
			},
			{
				id: "1",
				label: "Paragraph",
				element: "typography",
				question: "I am a Paragraph </p>",
				answer: "<p> I am a Paragraph </p>",
				status: "🤕"
			},
			{
				id: "2",
				label: "Input",
				element: "input",
				question: "<input value='I am a text Input' type='NULL' />",
				answer: "<input value='I am an Input' type='text' />",
				status: "😷"
			},
			{
				id: "3",
				label: "Switch",
				element: "switch",
				question: "<switch> I am a Material switch",
				answer: "<switch> I am a Material switch </switch>",
				status: "🤒"
			},
			{
				id: "4",
				label: "Checkbox",
				element: "checkbox",
				question: "<input type='NULL' /> I am a checkbox",
				answer: "<input type='checkbox' /> I am a checkbox",
				status: "🤧"
			},
			{
				id: "5",
				label: "Slider",
				element: "slider",
				question: "<Slider > I am a Material Slider",
				answer: "<Slider > I am a Material Slider </Slider>",
				status: "🥵"
			},
			{
				id: "6",
				label: "Html Link",
				element: "link",
				question: "<a src='moskool.com'> I am an html link </a>",
				answer: "<a href='moskool.com'> I am an html link </a>",
				status: "😵"
			},
			{
				id: "7",
				label: "Html text Input",
				element: "inputHtml",
				question: "<input type='text />",
				answer: "<input type='text />",
				status: "🥶"
			},
			{
				id: "8",
				label: "Html submit button",
				element: "buttonHtml",
				question: "<button type='NULL'>I am a submit button :)</button>",
				answer: "<button type='submit'>I am a submit button :)</button>",
				status: "🤒"
			}
		],
		selected: [
			{
				id: "12",
				label: "Drop Elements 👇",
				element: "typography",
				question: "I am Awesome! 😎",
				answer: "I am Awesome! 😎",
				status: "🧐"
			}
		]
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

	handleOnChagne = event => {
		console.log(event);
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
														<Grid item sm={10} md={10}>
															<h4>{item.label}</h4>
														</Grid>
														<Grid item sm={2} md={2}>
															{item && item.status && (
																<div
																	style={{ fontSize: "30px", float: "right" }}
																>
																	{item.status}
																</div>
															)}
														</Grid>
													</Grid>
													<FormControl margin="normal" required fullWidth>
														<InputLabel htmlFor="question">
															Try This!
														</InputLabel>
														<Input
															id={item.id}
															name={item.id}
															type="text"
															onChange={this.handleOnChagne}
															placeholder={item.question}
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
