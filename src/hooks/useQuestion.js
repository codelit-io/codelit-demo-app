/* TODO
 *  🚧
 */

/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase - Collection function in firebase provides access to collection in db
 * @param {String} firebase - Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @param {String} questionPath - Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";

const useQuestion = ({ firebase, questionId, questionPath }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const unsubscribe = await firebase
				.getCollectionById(questionPath, questionId)
				.onSnapshot(
					(snapshot) => {
						if (snapshot.size) {
							let question = [];
							snapshot.forEach((doc) =>
								question.push({ ...doc.data(), uid: doc.id })
							);
							setData(question[0]);
						} else {
							setData({
								label: "You have finished all questions ✅",
								question: "<h1>Nice Job 🎉</h1>",
								language: "html",
							});
						}
						setIsLoading(false);
					},
					(error) => setIsError(error.message)
				);

			return () => {
				unsubscribe();
			};
		})();
	}, [firebase, questionId, questionPath]);

	return { isLoading, isError, data };
};
export default useQuestion;
