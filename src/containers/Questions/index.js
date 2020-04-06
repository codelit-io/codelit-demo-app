import React, { useEffect, useState } from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "./QuestionsPage";

const Questions = ({ firebase, match }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [topicDetails, setTopicDetails] = useState({});

  useEffect(() => {
    setLoading(true);

    /* Make a firebase query to get details about 
      the topic or questions Such as name of this 
      topic and description
     */

    const getTopicDetails = firebase
      .collection("topics")
      .doc(match.params.collection)
      .get()
      .then(doc => {
        if (doc.exists) {
          setTopicDetails(doc.data());
          setLoading(false);
        } else {
          setTopicDetails({});
          setLoading(false);
        }
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });

    /* Make a firebase query to get details about 
      the topic or questions Such as name of this 
      topic and description
     */

    const getQuestions = firebase
      .collection("topics")
      .doc(match.params.collection)
      .collection("questions")
      .orderBy("id")
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let questions = [];
          snapshot.forEach(doc =>
            questions.push({ ...doc.data(), uid: doc.id })
          );
          setQuestions(questions);
          setLoading(false);
        } else {
          setQuestions([]);
          setLoading(false);
        }
        /* Unsubscribe from firebase on unmount */
        return () => {
          setQuestions([]);
          getQuestions();
          getTopicDetails();
        };
      });
  }, [firebase, match]);

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <QuestionsPage
          authUser={authUser}
          loading={loading}
          match={match}
          questions={questions}
          topicDetails={topicDetails}
        />
      )}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Questions);
