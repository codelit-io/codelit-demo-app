/**
 * Custom Hook to get more details about a topic or collection of questions
 * @param {Object} firebase - Firebase class provides access to authUser and db
 * @param {Object} match - Contains information about how a <Route path> matched the URL
 * @returns {isLoading: boolean, isError: Object, topicDetails: Object} - returns loading boolean, error Object and topicDetails
 */

import { useEffect, useState } from "react";

const useTopicDetails = (firebase, match) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState({});
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			/* Make a firebase query to get details about 
            the topic or questions Such as name of this 
            topic and description */
			const getTopicDetails = firebase
				.collection("collections")
				.where("slug", "==", match.params.collection)
				.onSnapshot(
					(snapshot) => {
						if (snapshot.size) {
							let data = [];
							snapshot.forEach((doc) =>
								data.push({ ...doc.data(), uid: doc.id })
							);
							setData(data[0]);
							setIsLoading(false);
						} else {
							setData([]);
							setIsLoading(false);
						}
						/* Unsubscribe from firebase on unmount */
					},
					(error) => setIsError(error.message)
				);

			return () => getTopicDetails();
		})();
	}, [firebase, match]);

	return { isLoading, isError, data };
};

export default useTopicDetails;
