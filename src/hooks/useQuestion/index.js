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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const unsubscribe = await firebase
        .getCollectionById(questionPath, questionId)
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              const question = [];
              snapshot.forEach(doc =>
                question.push({ ...doc.data(), uid: doc.id })
              );
              question.map(data => {
                try {
                  /* Questions can contain special JSON characters that needs to be parsed */
                  const parseQuestion = JSON.parse(data.question);
                  return setData({ ...data, question: parseQuestion });
                } catch {
                  return setData(data);
                }
              });
            } else {
              setData({
                label: "You have finished all questions ✅",
                question: "<h1>Nice Job 🎉</h1>",
                language: "html"
              });
            }
            setIsLoading(false);
          },
          error => setIsError(error.message)
        );

      return () => {
        unsubscribe();
      };
    })();
  }, [firebase, questionId, questionPath]);

  return { isLoading, isError, data };
};
export default useQuestion;
