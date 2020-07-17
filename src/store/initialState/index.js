const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) || false;

export const initialState = {
  authUser: null,
  collections: {},
  courses: [],
  themeOptions: {
    isDarkMode
  }
};
