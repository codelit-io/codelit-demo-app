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
