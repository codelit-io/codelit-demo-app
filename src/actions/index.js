export const addToCollections = (store, data) => {
  const collections = {
    ...store.state.collections,
    ...data
  };
  store.setState({ collections });
};

export const addToAuthUser = (store, data) => {
  const authUser = {
    ...store.state.authUser,
    ...data
  };
  store.setState({ authUser });
};

export const addToCourses = (store, data) => {
  const courses = {
    ...store.state.courses,
    ...data
  };
  store.setState({ courses });
};
