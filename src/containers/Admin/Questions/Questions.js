import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { AuthUserContext } from "../../../components/Session";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Spinner from "../../../components/shared/Spinner";
import { withFirebase } from "../../../components/Firebase";
import QuestionsTable from "./QuestionsTable";

const Questions = ({ firebase }) => {
	const [loading, setLoading] = useState(false);
	const [question] = useState({
		answer: "<button> I am a Button </button>",
		element: "button",
		id: "0",
		isCorrect: false,
		label: "Fix Html button tag syntax",
		url: "Fix-Html-button-tag-syntax",
		question: "<button> I am a Button <button>",
		status: "😴"
	});
	const [questions, setQuestions] = useState(null);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = firebase.questions().onSnapshot(snapshot => {
			if (snapshot.size) {
				let questions = [];
				snapshot.forEach(doc => questions.push({ ...doc.data(), uid: doc.id }));
				setQuestions(questions);
			} else {
				setQuestions(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [firebase]);

	const onChangeText = event => {
		setQuestions({ label: event.target.value });
	};

	const onCreateQuestion = (event, authUser) => {
		console.log(event)
		if (question.label) {
			firebase.questions().add({
				...question,
				userId: authUser.uid,
				createdAt: firebase.fieldValue.serverTimestamp()
			});
		}
		// event.preventDefault();
	};

	const onEditQuestion = (question, label) => {
		const { uid, ...questionSnapshot } = question;

		firebase.question(question.uid).update({
			...questionSnapshot,
			label,
			editedAt: firebase.fieldValue.serverTimestamp()
		});
	};

	const onRemoveQuestion = uid => {
		firebase.question(uid).delete();
	};

	return (
		<AuthUserContext.Consumer>
			{authUser => (
				<>
					{loading && <Spinner loading={loading} />}

					{!questions && <div>There are no questions ...</div>}
					<form onSubmit={event => onCreateQuestion(event, authUser)}>
						<Input type="text" value={question.label} onChange={onChangeText} />
						<Button variant="contained" color="primary" type="submit">
							Post <PostAddIcon />
						</Button>
					</form>
					{questions && (
						<QuestionsTable
							questions={questions}
							onEditQuestion={onEditQuestion}
							onRemoveQuestion={onRemoveQuestion}
							onCreateQuestion={event => onCreateQuestion(event, authUser)}
						/>
					)}
				</>
			)}
		</AuthUserContext.Consumer>
	);
};

export default withFirebase(Questions);
