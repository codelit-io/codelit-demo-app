import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import { Draggable } from "react-beautiful-dnd";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import MoComponent from "../../MoComponent";

const DraggableItem = ({
	draggableItem,
	index,
	classes,
	listId,
	setNewLists
}) => {
	const [item, setItem] = useState(draggableItem);

	const handleOnChagne = event => {
		if (
			event.target.value.replace(/\s/g, "") === item.answer.replace(/\s/g, "")
		) {
			setItem({ ...item, isCorrect: true, userAnswer: event.target.value });
		} else {
			setItem({ ...item, isCorrect: false, userAnswer: event.target.value });
		}
		setNewLists(item);
	};

	return (
		<Draggable key={item.id} draggableId={item.id} index={index}>
			{provided => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={`${classes.card} ${item.isCorrect && classes.correct}`}
					>
						<Grid container style={{ alignItems: "center" }}>
							<Grid item xs={2} sm={3} md={2}>
								<Avatar>{item.id}</Avatar>
							</Grid>
							<Grid item xs={8} sm={7} md={8}>
								<h4>{item.label}</h4>
							</Grid>
							<Grid item xs={2} sm={2} md={2}>
								{item && item.status && (
									<div style={{ fontSize: "30px", float: "right" }}>
										{item.isCorrect ? <CheckIcon /> : item.status}
									</div>
								)}
							</Grid>
						</Grid>
						{listId === "leftList" ? (
							<FormControl margin="normal" required fullWidth>
								{/* <InputLabel htmlFor="question">
												<CodeIcon />
											</InputLabel> */}
								<Input
									error={!item.isCorrect}
									id={item.id}
									name={item.id}
									type="text"
									onChange={handleOnChagne}
									defaultValue={item.userAnswer || item.question}
									inputProps={{
										maxLength: item.answer.length + 10
									}}
								/>
							</FormControl>
						) : (
							<MoComponent {...item}></MoComponent>
						)}
					</div>
			)}
		</Draggable>
	);
};

export default DraggableItem;
