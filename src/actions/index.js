export const addToState = (store, data) => {
  const state = {
    ...store.state,
    ...data,
  };
  store.setState(state);
};
export const addToCollections = (store, data) => {
  const collections = {
    ...store.state.collections,
    ...data,
  };
  store.setState({ collections });
};

export const addToAuthUser = (store, data) => {
  let authUser = {
    ...store.state.authUser,
    ...data,
  };

  if (!data) {
    authUser = null;
  }
  store.setState({ authUser });
};

export const addToUserRole = (store, data) => {
  let userRole = {
    ...store.state.userRole,
    ...data,
  };

  if (!data) {
    userRole = null;
  }
  store.setState({ userRole });
};

export const addToFirebase = (store, data) => {
  const firebaseCache = {
    ...store.state.firebaseCache,
    ...data,
  };
  store.setState({ firebaseCache });
};

export const addToCourses = (store, data) => {
  const courses = {
    ...store.state.courses,
    ...data,
  };
  store.setState({ courses });
};

export const addToThemeOptions = (store, data) => {
  const themeOptions = {
    ...store.state.themeOptions,
    ...data,
  };
  store.setState({ themeOptions });
};
