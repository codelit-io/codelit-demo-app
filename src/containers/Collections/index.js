/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<QuestionsPage/>} - returns QuestionsPage component which renders the rest of the components
 * @withAuthentication - HOC provides firebase and match props
 */

import React from "react";

import { AuthUserContext, withAuthentication } from "../../components/Session";
import QuestionsPage from "../Collection/QuestionsPage";
import useCollections from "../../Hooks/useCollections";

const Collections = ({ firebase, match }) => {
  const collectionPath = "collections";
  const collections = useCollections(collectionPath, firebase, match);

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <QuestionsPage
          authUser={authUser}
          isLoading={collections.isLoading}
          match={match}
          questions={collections.data}
          topicDetails={{ label: "My Courses" }}
        />
      )}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(Collections);
