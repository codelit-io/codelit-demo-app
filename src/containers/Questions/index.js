import React, { useEffect, useState } from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "./QuestionsPage";

const Questions = ({ firebase, match }) => {
  const [configs, setConfigs] = useState({});
  useEffect(() => {
    firebase
      .moskool()
      .doc(match.params.collection)
      .get()
      .then(doc => {
        if (doc.exists) {
          setConfigs(doc.data());
        } else {
          setConfigs({});
        }
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });

    return () => {
      setConfigs({});
    };
  }, [firebase, match]);

  return (
    <AuthUserContext.Consumer>
      {authUser =>
        configs &&
        configs.slug && (
          <QuestionsPage
            authUser={authUser}
            configs={configs}
            firebase={firebase}
          />
        )
      }
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Questions);
