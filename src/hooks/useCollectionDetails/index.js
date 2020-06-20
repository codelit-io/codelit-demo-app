/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Collection Details 💁‍♂️
 *
 * Custom Hook to get more details about a collection in firebase
 *
 * @param {String} collectionName - Name or path of collection
 * @param {String} doc - Name of doc which should match the route
 * @param {Class} firebase - Firebase class provides access to authUser and db
 * @returns {isLoading: boolean, isError: Object, collectionDetails: Object} - returns loading boolean, error Object and collectionDetails
 *
 * @example
 *
 * Example Usage
 *
 * ```
 * const courseDetails = useCollectionDetails(
 *  "COLLECTION_NAME",
 *  "DOC_NAME",
 *   firebase
 * );
 * ```
 * @see See [React custom hooks](https://reactjs.org/docs/hooks-custom.html)
 */

import { useEffect, useState } from "react";

const useCollectionDetails = (collectionName, doc, firebase) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description */
      const getCollectionDetails = await firebase
        .collection(collectionName)
        .where("doc", "==", doc)
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              const data = [];
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
  }, [firebase, collectionName, doc]);

  return { isLoading, isError, data };
};

export default useCollectionDetails;
