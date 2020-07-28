/* * *  TODO  * * * * * * * * * * * * * * * * * * * * * *
 *  Figure out a new way to do this                    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const addFocusOnEditor = async () => {
  await wait(400);
  try {
    document.querySelector(".npm__react-simple-code-editor__textarea").focus();
  } catch {
    console.log("Focus on editor failed");
  }
};

export const getPreviewElement = () => {
  let element;
  try {
    element = document.querySelector("#MoBrowserMockup > div");
  } catch {
    console.log("getPreviewElement not available");
  }
  return element;
};

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
