import React, { useEffect, useState } from "react";

import * as ROUTES from "constants/routes";
import { useHistory } from "react-router-dom";
import { withFirebase } from "../Firebase";
import useUserRole from "hooks/useUserRole";

const withAuthentication = isUserRole => Component => {
  const WithAuthentication = props => {
    const authUserCache = JSON.parse(localStorage.getItem("authUser"));
    const [authUser, setAuthUser] = useState(authUserCache);
    const { firebase } = props;
    const history = useHistory();
    const userRole = useUserRole(authUser);

    /* TODO: Add caching */
    useEffect(() => {
      const listener = !authUserCache
        ? firebase.onAuthUserListener(
            authUser => {
              localStorage.setItem("authUser", JSON.stringify(authUser));
              setAuthUser(authUser);
            },
            () => {
              localStorage.setItem("authUser", null);
              setAuthUser(null);
            }
          )
        : () => null;

      return () => listener();
    }, [authUserCache, firebase]);

    // if isUserRole is available then redirect to correct page per permission
    if (isUserRole) {
      if (!userRole[isUserRole]) {
        // TODO: Navigate to not authorized page
        history.push(ROUTES.SIGN_IN.path);
        return () => null;
      }
    }

    return <Component {...props} authUser={authUser} />;
  };
  return withFirebase(React.memo(WithAuthentication));
};

export default withAuthentication;
