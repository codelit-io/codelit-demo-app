/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase.collection - Collection function in firebase provides access to collection in db
 * @param {Object} collectionPath - Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";

const useCollections = (collectionQueryProp) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState([]);
	const [collectionQuery] = useState(collectionQueryProp);
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			/* Make a firebase query to get details about 
            the topic or questions Such as name of this 
            topic and description
            */
			const getCollection = collectionQuery.onSnapshot(
				(snapshot) => {
					if (snapshot.size) {
						let data = [];
						snapshot.forEach((doc) =>
							data.push({ ...doc.data(), uid: doc.id })
						);
						setData(data);
						setIsLoading(false);
					} else {
						setData([]);
						setIsLoading(false);
					}
					/* Unsubscribe from firebase on unmount */
				},
				(error) => setIsError(error.message)
			);

			return () => {
				setData([]);
				getCollection();
			};
		})();
	}, [collectionQuery]);

	return { isLoading, isError, data };
};
export default useCollections;
