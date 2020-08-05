/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName useAuthentication custom hook 💁‍♂️
 *
 * Custom Hook to get authUser object from firebase
 *
 * @returns {isLoading: boolean, isError: Object, authUser: Object} - returns loading boolean, error Object and authUser Object
 *
 * @example
 *
 * Example Usage
 *
 * ```
 * const { authUser } = useAuthentication(
 *   firebase
 * );
 * ```
 * @see See [React custom hooks](https://reactjs.org/docs/hooks-custom.html)
 */

import { useEffect, useState } from "react";

const useAuthentication = firebase => {
  const [state, setState] = useState({
    authUser: JSON.parse(localStorage.getItem("authUser")),
    isLoading: true
  });

  useEffect(() => {
    const listener = firebase.onAuthUserListener(
      authUser => {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setState({ authUser, isLoading: false });
      },
      error => {
        localStorage.setItem("authUser", null);
        setState({ authUser: null, isLoading: false, isError: error });
      }
    );

    return () => {
      listener();
    };
  }, [firebase]);

  return { ...state };
};

export default useAuthentication;
