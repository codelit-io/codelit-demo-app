/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React from "react";

import { ReactComponent as Js } from "assets/js.svg";
import { ReactComponent as Html } from "assets/html.svg";
import { ReactComponent as ReactJsx } from "assets/react-jsx.svg";
import { ReactComponent as ReactStyle } from "assets/react-style.svg";
import * as ROUTES from "constants/routes";

import { COURSES, SIGN_UP } from "constants/i18n";
import { withAuthentication } from "components/shared/Session";
import CoursesList from "./CoursesList";
import Footer from "components/shared/Footer";
import MoPage from "components/library/MoPage";
import useCollections from "hooks/useCollections";
import useUserRole from "hooks/useUserRole";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const CoursesPage = ({ authUser, collection, history, firebase }) => {
  const userRole = useUserRole(authUser);

  const types = {
    js: () => <Js />,
    html: () => <Html />,
    reactJsx: () => <ReactJsx />,
    reactStyle: () => <ReactStyle />,
    disabled: () => <LockIcon />,
    new: () => <AddCircleOutlineIcon />,
    signup: () => <LockOpenIcon />
  };

  const collectionDetails = {
    collectionPath: collection.path,
    data: [],
    isProgressBar: collection.isProgressBar,
    locationHash: history.location.hash,
    title: collection.title
  };

  const courses = useCollections(collectionDetails, firebase);

  if (!courses || !courses?.data?.length) {
    return null;
  }
  /* TODO: Move to global initial state  */
  const coursesWithOptions = [
    userRole.isAdmin
      ? {
          type: "new",
          title: COURSES.ADD_A_COURSES,
          url: ROUTES.COLLECTIONS_ADD.path
        }
      : {
          type: "signup",
          title: SIGN_UP.CORE,
          subtitle: SIGN_UP.SIGN_UP_TO_EARN_REWARDS,
          url: ROUTES.SIGN_UP.path
        },
    ...courses.data
  ];

  return (
    <MoPage title={collectionDetails?.title}>
      <Grid container spacing={4} alignItems="center">
        <CoursesList
          courses={coursesWithOptions}
          collectionPath={"courses"}
          points={0}
          types={types}
        />
      </Grid>
      <Footer />
    </MoPage>
  );
};

export default withAuthentication(CoursesPage);
