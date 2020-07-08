/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName useAuthentication custom hook 💁‍♂️
 *
 * Custom Hook to get authUser object from firebase
 *
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
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
  const [isLoading, setIsLoading] = useState(true);
  const [isError] = useState(false);
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    setIsLoading(true);
    const listener = firebase.onAuthUserListener(
      authUser => {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setAuthUser(authUser);
        setIsLoading(false);
      },
      () => {
        localStorage.removeItem("authUser");
        setAuthUser(null);
      }
    );

    return () => {
      listener();
    };
  }, [firebase]);

  return { isLoading, isError, authUser };
};

export default useAuthentication;
