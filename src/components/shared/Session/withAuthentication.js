import React, { useEffect, useState } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const [state, setState] = useState({
      authUser: JSON.parse(localStorage.getItem("authUser"))
    });

    const { firebase } = props;

    useEffect(() => {
      const listener = firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          setState({ authUser });
        },
        () => {
          localStorage.removeItem("authUser");
          setState({ authUser: null });
        }
      );

      return () => listener();
    }, [firebase]);

    return (
      <AuthUserContext.Provider value={state.authUser}>
        <Component {...props} authUser={state.authUser} />
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(WithAuthentication);
};

export default withAuthentication;
