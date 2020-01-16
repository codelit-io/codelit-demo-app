// import React from "react";

// import Box from "@material-ui/core/Box";
// import { DragDropContext } from "react-beautiful-dnd";
// import DndList from "./DndList";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";

// const reorder = (list, startIndex, endIndex) => {
// 	const result = Array.from(list);
// 	const [removed] = result.splice(startIndex, 1);
// 	result.splice(endIndex, 0, removed);

// 	return result;
// };

// const onDragEnd = result => {
// 	const { source, destination } = result;

// 	// dropped outside the list
// 	if (!destination) {
// 		return;
// 	}

// 	if (source.droppableId === destination.droppableId) {
// 		const items = reorder(
// 			getList(source.droppableId),
// 			source.index,
// 			destination.index
// 		);

// 		let newState = { items };

// 		if (source.droppableId === "droppable2") {
// 			newState = { selected: items };
// 		}

// 		setState({ ...state, ...newState });
// 	} else {
// 		const result = move(
// 			getList(source.droppableId),
// 			getList(destination.droppableId),
// 			source,
// 			destination
// 		);

// 		setState({
// 			items: result.droppable,
// 			selected: result.droppable2
// 		});
// 	}
// };

// const Dnd = props => {
// 	return (
// 		<DragDropContext onDragEnd={onDragEnd}>
// 			<Grid container spacing={3}>
// 				<Grid item xs={12} sm={6} md={6}>
// 					<Typography
// 						component="h6"
// 						variant="h4"
// 						style={{ textAlign: "center", marginBottom: "20px" }}
// 					>
// 						<Box fontWeight="fontWeightLight">Questions</Box>
// 					</Typography>
// 					{/*  DND LIST 1*/}
// 					<DndList props={props} />
// 				</Grid>
// 				<Grid item xs={12} sm={6} md={6}>
// 					<Typography
// 						component="h6"
// 						variant="h4"
// 						style={{ textAlign: "center", marginBottom: "20px" }}
// 					>
// 						<Box fontWeight="fontWeightLight">Preview</Box>
// 					</Typography>
// 					{/*  DND LIST  2 */}
// 				</Grid>
// 			</Grid>
// 		</DragDropContext>
// 	);
// };

// export default Dnd;
