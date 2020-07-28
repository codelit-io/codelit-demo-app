/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Question View Mode Component ⁉️
 *
 * This container fetches question data and user roles. Then it renders the questions page
 * View mode is only for viewing and answering questions, no edits are allowed.
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @param {Object} history - Provides several different implementations for managing session history in JavaScript in various environments - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<QuestionPage/>} - returns CodeEditor component which renders the rest of the components
 *
 * @see Link [Example Question Page in View Mode](https://moskool.com/courses/mo-easy/1)
 *
 */

import React, { useCallback } from "react";

import * as ROUTES from "constants/routes";
import withAuthentication from "components/shared/Session/withAuthentication";

import useUserRole from "hooks/useUserRole";
import useQuestion from "hooks/useQuestion";
import QuestionPage from "./QuestionPage";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import MoBreadcrumbs from "components/library/MoBreadcrumbs";

const QuestionViewPage = ({ authUser, firebase, history, match }) => {
  const { data, isLoading } = useQuestion({
    firebase,
    questionId: match.params.questionId,
    questionPath: `courses/${match.params.collection}/questions`
  });

  const userRole = useUserRole(authUser);

  /* Handler to send user to editMode page */
  const handleOnClick = useCallback(() => {
    /* TODO: Fix  me */
    if (userRole.isAdmin) {
      history.push(`${match.params.questionId}/isEditMode`);
    }
  }, [userRole, history, match]);

  const handleNavigation = useCallback(
    id => {
      history.push(
        `${ROUTES.COLLECTIONS.path}/${match.params.collection}/${id}`
      );
    },
    [history, match]
  );

  const breadcrumbsOptions = [
    {
      title: "Back to course",
      url: `/courses/${match.params.collection}`
    },
    {
      title: data.title
    }
  ];

  return (
    <Container maxWidth="xl">
      <Navigation
        Breadcrumbs={() => (
          <MoBreadcrumbs breadcrumbsOptions={breadcrumbsOptions} />
        )}
      />
      <QuestionPage
        authUser={authUser}
        data={data}
        firebase={firebase}
        handleOnClick={() => handleOnClick()}
        handleNavigation={id => handleNavigation(id)}
        isLoading={isLoading}
        match={match}
        isAdmin={userRole.isAdmin}
      />
    </Container>
  );
};

export default withAuthentication(QuestionViewPage);
