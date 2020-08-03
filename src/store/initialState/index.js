import { getCache } from "helpers/localCache";

const isDarkMode = getCache({ key: "isDarkMode" }) || false;

export const initialState = {
  authUser: null,
  collections: {},
  courses: [],
  themeOptions: {
    isDarkMode
  },
  firebase: null
};
