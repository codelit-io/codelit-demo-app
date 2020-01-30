import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";

const QuestionItem = ({
	authUser,
	question,
	onEditQuestion,
	onRemoveQuestion
}) => {
	const [state, setState] = useState({
		editMode: false,
		editLabel: question.label
	});
	const { editMode, editLabel } = state;

	const onToggleEditMode = () => {
		setState(state => ({
			editMode: !state.editMode,
			editLabel: question.label
		}));
	};

	const onChangeEditLabel = event => {
		setState({ editLabel: event.target.value });
	};

	const onSaveEditLabel = () => {
		onEditQuestion(question, state.editLabel);

		setState({ editMode: false });
	};

	return (
		<div>
			<TableCell align="right">
				{editMode ? (
					<input type="text" value={editLabel} onChange={onChangeEditLabel} />
				) : (
					<span>
						{question.label}
						{question.editedAt && <span>(Edited)</span>}
					</span>
				)}
			</TableCell>
			{authUser.uid === question.userId && (
				<TableCell align="right" colSpan={6}>
					{editMode ? (
						<span>
							<Button onClick={onSaveEditLabel}>Save</Button>
							<Button onClick={onToggleEditMode}>Reset</Button>
						</span>
					) : (
						<Button onClick={onToggleEditMode}>Edit</Button>
					)}

					{!editMode && (
						<Button
							type="button"
							onClick={() => onRemoveQuestion(question.uid)}
						>
							Delete
						</Button>
					)}
				</TableCell>
			)}
		</div>
	);
};

export default QuestionItem;
