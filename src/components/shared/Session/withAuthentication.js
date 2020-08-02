import React, { useEffect, useState } from "react";

import * as ROUTES from "constants/routes";
import { useHistory } from "react-router-dom";
import { withFirebase } from "../Firebase";
import useUserRole from "hooks/useUserRole";

const withAuthentication = isUserRole => Component => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  const WithAuthentication = props => {
    const [state, setState] = useState(authUser);
    const { firebase } = props;
    const history = useHistory();
    const userRole = useUserRole(authUser);

    useEffect(() => {
      const listener = firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          setState(prevState => {
            return { ...prevState, authUser };
          });
        },
        () => {
          localStorage.removeItem("authUser");
          setState({ authUser: null });
        }
      );
      return () => listener();
    }, [firebase]);

    // if isUserRole is available then redirect to correct page per permission
    if (isUserRole) {
      if (!userRole[isUserRole]) {
        // TODO: Navigate to not authorized page
        history.push(ROUTES.SIGN_IN.path);
        return null;
      }
    }
    console.log(authUser);
    if (authUser) {
      return <Component {...props} authUser={state.authUser} />;
    } else {
      return <Component {...props} />;
    }
  };
  return withFirebase(React.memo(WithAuthentication));
};

export default withAuthentication;
