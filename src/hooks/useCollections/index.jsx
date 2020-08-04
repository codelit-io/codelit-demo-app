/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase.collection - Collection function in firebase provides access to collection in db
 * @param {Object} collectionPath - Contains details about what to query, one of the items is collectionPath: Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @param {String} locationHash - History location hash value of current url
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useCollections = ({ collectionPath, data, locationHash }, firebase) => {
  const [state, setState] = useState({
    data,
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    /* Make a firebase query to get details about 
          the collection or questions Such as name and description
          */
    // Used for canceling async firebase call
    let didCancel = false;
    const whereOptions = locationHash
      ? // where condition based on hash for current location
        ["type", "==", locationHash.substring(1)]
      : // otherwise use a condition where an id must be greater than 0 for a question
        ["id", ">", 0];
    const fetchData = async () =>
      !didCancel &&
      (await firebase
        ?.collection(collectionPath)
        .where(...whereOptions)
        .orderBy("id")
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              const data = [];
              snapshot.forEach(doc =>
                data.push({ ...doc.data(), uid: doc.id })
              );
              setState({
                data,
                isLoading: false,
                isError: false
              });
            } else {
              setState(prevState => {
                return {
                  data: prevState.data,
                  isLoading: false,
                  isError: false
                };
              });
            }
            /* Unsubscribe from firebase on unmount */
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
  }, [collectionPath, firebase, locationHash]);

  return { ...state };
};

useCollections.propTypes = {
  collectionProps: PropTypes.shape({
    type: PropTypes.arrayOf(["html", "js", "reactStyle", "reactJsx"])
      .isRequired,
    collectionPath: PropTypes.string.isRequired,
    whereProps: PropTypes.arrayOf(["html", "js", "reactStyle", "reactJsx"])
      .isRequired,
    locationHash: PropTypes.string
  })
};
export default useCollections;
