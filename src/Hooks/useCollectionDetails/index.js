/**
 * Custom Hook to get more details about a collection in firebase
 * @param {Object} firebase - Firebase class provides access to authUser and db
 * @param {String} collectionName - Name or path of collection 
 * @returns {isLoading: boolean, isError: Object, collectionDetails: Object} - returns loading boolean, error Object and collectionDetails
 */

import { useEffect, useState } from "react";

const useCollectionDetails = (firebase, collectionName) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description */
      const getCollectionDetails = firebase
        .collection("collections")
        .where("id", "==", collectionName)
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              let data = [];
              snapshot.forEach(doc =>
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
          error => setIsError(error.message)
        );

      return () => getCollectionDetails();
    })();
  }, [firebase, collectionName]);

  return { isLoading, isError, data };
};

export default useCollectionDetails;
