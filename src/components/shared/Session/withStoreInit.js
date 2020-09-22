import React, { useEffect } from "react";

import { withFirebase } from "../Firebase";
import useGlobal from "store";
import getUserRole from "helpers/getUserRole";

const withStoreInit = (Component) => {
  const WithStoreInit = ({ firebase }) => {
    const [state, actions] = useGlobal();
    if (process.env.NODE_ENV === "development") {
      console.log({ state });
    }
    /* TODO: Add caching */
    useEffect(() => {
      (async () => {
        const listener = await firebase.onAuthUserListener(
          (authUser) => {
            const userRole = getUserRole(authUser);
            actions.addToState({ firebase, authUser, userRole });
          },
          () => {
            actions.addToState({
              firebase: firebase,
              authUser: null,
              userRole: { isAdmin: false }
            });
          }
        );
        return () => listener();
      })();
    }, [actions, firebase]);

    return firebase ? <Component /> : null;
  };
  return withFirebase(React.memo(WithStoreInit));
};

export default withStoreInit;
