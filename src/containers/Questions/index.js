import React, { useEffect, useState } from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "./QuestionsPage";

const Questions = ({ firebase, match, history }) => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    firebase
      .moskool()
      .doc(match.params.collection)
      .get()
      .then(doc => {
        if (doc.exists) {
          // Convert to configs object
          let configs = doc.data();
          // Use a configs instance method
          setConfigs(configs);
        } else {
          history.push(ROUTES.NOT_FOUND.path);
        }
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });

    return () => {};
  }, [firebase, match, history]);

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <QuestionsPage
          authUser={authUser}
          configs={configs}
          firebase={firebase}
        />
      )}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Questions);
