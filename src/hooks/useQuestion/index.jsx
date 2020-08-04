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
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    // Used for canceling async firebase call
    let didCancel = false;
    const fetchData = () =>
      !didCancel &&
      firebase?.getCollectionById(questionPath, questionId).onSnapshot(
        snapshot => {
          // 0 is default id for stats doc
          if (questionId === 0) {
            return;
          }

          if (snapshot.size) {
            const question = [];
            snapshot.forEach(doc =>
              question.push({ ...doc.data(), uid: doc.id })
            );
            question.map(data => {
              setState({
                data,
                isLoading: false,
                isError: false
              });
              return data;
            });
          } else {
            return setState({
              data: {
                label: "You have finished all questions ✅",
                title: "Nice Job 🎉",
                language: "html"
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
      );

    // fetch data from firebase
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [firebase, questionId, questionPath]);

  return { ...state };
};
export default useQuestion;
