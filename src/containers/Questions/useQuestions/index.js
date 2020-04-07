/**
 * Custom Hook to get list of Questions from firebase
 * @param {Object} firebase - Firebase class provides access to authUser and db
 * @param {Object} match - Contains information about how a <Route path> matched the URL
 * @returns {isLoading: boolean, isError: Object, questions: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";

const useQuestions = (firebase, match) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			/* Make a firebase query to get details about 
            the topic or questions Such as name of this 
            topic and description
            */
			const getQuestions = firebase
				.collection("topics")
				.doc(match.params.collection)
				.collection("questions")
				.orderBy("id")
				.onSnapshot(
					snapshot => {
						if (snapshot.size) {
							let questions = [];
							snapshot.forEach(doc =>
								questions.push({ ...doc.data(), uid: doc.id })
							);
							setData(questions);
							setIsLoading(false);
						} else {
							setData([]);
							setIsLoading(false);
						}
						/* Unsubscribe from firebase on unmount */
						return () => {
							setData([]);
							getQuestions();
						};
					},
					error => setIsError(error.message)
				);
		})();
	}, [firebase, match]);

	return { isLoading, isError, data };
};
export default useQuestions;
