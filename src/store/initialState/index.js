import { getCache } from "utils/localCache";

const isDarkMode = getCache({ key: "isDarkMode" }) || false;

export const initialState = {
  authUser: null,
  collections: {},
  courses: [],
  themeOptions: {
    isDarkMode
  }
};
