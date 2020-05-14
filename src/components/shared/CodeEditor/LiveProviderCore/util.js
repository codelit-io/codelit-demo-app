/* * *  TODO  * * * * * * * * * * * * * * * * * * * * * *
 *  Figure out a new way to do this                    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const addFocusOnEditor = () => {
  setTimeout(() => {
    try {
      document
        .querySelector(".npm__react-simple-code-editor__textarea")
        .focus();
    } catch {
      console.log("Focus on editor failed");
    }
  }, 1000);
};
