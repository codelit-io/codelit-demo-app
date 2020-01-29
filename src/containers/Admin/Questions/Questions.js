import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { AuthUserContext } from "../../../components/Session";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Spinner from "../../../components/shared/Spinner";
import { withFirebase } from "../../../components/Firebase";
import QuestionList from "./QuestionList";

const Questions = ({ firebase }) => {
	const [state, setState] = useState({
		text: "",
		loading: false,
		questions: [],
		limit: 15
	});

	// const onListenForQuestions = () => {
	// 	setState({ loading: false });
	// 	firebase
	// 		._getQuestions()
	// 		.orderBy("createdAt", "desc")
	// 		.limit(state.limit)
	// 		.onSnapshot(snapshot => {
	// 			if (snapshot.size) {
	// 				let questions = [];
	// 				snapshot.forEach(doc =>
	// 					questions.push({ ...doc.data(), uid: doc.id })
	// 				);
	// 				setState({
	// 					questions: questions.reverse(),
	// 					loading: false
	// 				});
	// 			} else {
	// 				setState({ questions: null, loading: false });
	// 			}
	// 		});
	// };

	useEffect(() => {
		setState({ loading: false });
		const unsubscribe = firebase
			._getQuestions()
			.orderBy("createdAt", "desc")
			.limit(15)
			.onSnapshot(snapshot => {
				if (snapshot.size) {
					let questions = [];
					snapshot.forEach(doc =>
						questions.push({ ...doc.data(), uid: doc.id })
					);
					setState({
						questions: questions.reverse(),
						loading: false
					});
				} else {
					setState({ questions: null, loading: false });
				}
			});

		return () => unsubscribe();
	}, [firebase]);

	const onChangeText = event => {
		setState({ text: event.target.value });
	};

	const onCreateQuestion = (event, authUser) => {
		if (state.text) {
			firebase.questions().add({
				text: state.text,
				userId: authUser.uid,
				createdAt: firebase.fieldValue.serverTimestamp()
			});

			setState({ text: "" });
		}
		event.preventDefault();
	};

	const onEditQuestion = (question, text) => {
		const { uid, ...questionSnapshot } = question;

		firebase.question(question.uid).update({
			...questionSnapshot,
			text,
			editedAt: firebase.fieldValue.serverTimestamp()
		});
	};

	const onRemoveQuestion = uid => {
		firebase._getQuestion(uid).delete();
	};

	const onNextPage = () => {
		setState(state => ({ limit: state.limit + 15 }));
	};

	const { text, questions, loading } = state;

	return (
		<AuthUserContext.Consumer>
			{authUser => (
				<div>
					{loading && <Spinner loading={loading} />}

					{questions && (
						<QuestionList
							authUser={authUser}
							questions={questions}
							onEditQuestion={onEditQuestion}
							onRemoveQuestion={onRemoveQuestion}
						/>
					)}

					{!questions && <div>There are no questions ...</div>}
					{!loading && questions && (
						<Button variant="contained" onClick={onNextPage}>
							<ExpandMoreIcon />
							More
						</Button>
					)}
					<form onSubmit={event => onCreateQuestion(event, authUser)}>
						<Input type="text" value={text} onChange={onChangeText} />
						<Button variant="contained" color="primary" type="submit">
							Post <PostAddIcon />
						</Button>
					</form>
				</div>
			)}
		</AuthUserContext.Consumer>
	);
};

export default withFirebase(Questions);
