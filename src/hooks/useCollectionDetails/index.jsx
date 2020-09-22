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

const useCollectionDetails = ({ collectionPath }, doc, firebase) => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    /* Make a firebase query to get details about 
          the collection or questions Such as name and description */

    // Used for canceling async firebase call
    let didCancel = false;
    const fetchData = async () =>
      !didCancel &&
      (await firebase
        ?.collection(collectionPath)
        .where("doc", "==", doc)
        .onSnapshot(
          (snapshot) => {
            if (snapshot.size) {
              const data = [];
              snapshot.forEach((doc) =>
                data.push({ ...doc.data(), uid: doc.id })
              );
              data.map((data) =>
                setState({
                  data,
                  isLoading: false,
                  isError: false
                })
              );
            } else {
              setState({
                data: {
                  title: "My new course",
                  category: "#ReactFTW",
                  id: "1"
                },
                isLoading: false,
                isError: false
              });
            }
          },
          () =>
            setState({
              data: [],
              isLoading: false,
              isError: false
            })
        ));

    // fetch data from firebase
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [firebase, collectionPath, doc]);

  return { ...state };
};

export default useCollectionDetails;
