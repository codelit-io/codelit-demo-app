import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

class QuestionItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			editText: this.props.question.text
		};
	}

	onToggleEditMode = () => {
		this.setState(state => ({
			editMode: !state.editMode,
			editText: this.props.question.text
		}));
	};

	onChangeEditText = event => {
		this.setState({ editText: event.target.value });
	};

	onSaveEditText = () => {
		this.props.onEditQuestion(this.props.question, this.state.editText);

		this.setState({ editMode: false });
	};

	render() {
		const { authUser, question, onRemoveQuestion } = this.props;
		const { editMode, editText } = this.state;

		return (
			<ListItem>
				{editMode ? (
					<input
						type="text"
						value={editText}
						onChange={this.onChangeEditText}
					/>
				) : (
					<span>
						{question.text}
						{question.editedAt && <span>(Edited)</span>}
					</span>
				)}

				{authUser.uid === question.userId && (
					<div>
						{editMode ? (
							<span>
								<Button onClick={this.onSaveEditText}>Save</Button>
								<Button onClick={this.onToggleEditMode}>Reset</Button>
							</span>
						) : (
							<Button onClick={this.onToggleEditMode}>Edit</Button>
						)}

						{!editMode && (
							<Button
								type="button"
								onClick={() => onRemoveQuestion(question.uid)}
							>
								Delete
							</Button>
						)}
					</div>
				)}
			</ListItem>
		);
	}
}

export default QuestionItem;
