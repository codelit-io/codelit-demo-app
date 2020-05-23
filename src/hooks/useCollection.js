/* TODO
 * 🚧 Dev in Progress 🚧
 */

/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase.collection - Collection function in firebase provides access to collection in db
 * @param {Object} collectionPath - Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";

const useCollection = (firebase, payload) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description
            */
      const createCollection = await firebase.createCollection("Test", payload);
      // (data) => {setData(data)},
      // (error) => setIsError(error.message)
      return () => {
        setData({});
        createCollection();
      };
    })();
  }, [firebase, payload]);

  return { isLoading, isError, data };
};
export default useCollection;
