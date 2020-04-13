/**
 * Collections is a container that fetches firebase data using hooks and renders cards of questions
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<QuestionsPage/>} - returns QuestionsPage component which renders the rest of the components
 */

import React from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "./QuestionsPage";
import useCollectionDetails from "../../Hooks/useCollectionDetails";
import useCollections from "../../Hooks/useCollections";

const Collection = ({ firebase, match }) => {
  const collectionPath =
    "collections/" + match.params.collection + "/questions";
  const questions = useCollections(collectionPath, firebase);
  const collectionDetails = useCollectionDetails(
    firebase,
    match.params.collection
  );

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <QuestionsPage
          authUser={authUser}
          isLoading={collectionDetails.isLoading || questions.isLoading}
          match={match}
          questions={questions.data}
          collectionDetails={collectionDetails.data}
        />
      )}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Collection);
