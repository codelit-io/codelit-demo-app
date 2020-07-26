/* Util to set and get local storage */
export const setCache = ({ key, value }) => {
  try {
    localStorage.setItem(key, JSON.parse(value));
  } catch {
    console.log(`failed to set localStorage ${key}: ${value}`);
  }
};
export const getCache = ({ key }) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.log(`failed to get localStorage ${key}`);
  }
};
