/* * *  TODO  * * * * * * * * * * * * * * * * * * * * * *
 *  Figure out a new way to do this                    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const addFocusOnEditor = async () => {
  await wait(800);
  try {
    const element = document.querySelector(
      ".npm__react-simple-code-editor__textarea"
    );
    focusAtEnd(element);
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
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function focusAtEnd(el) {
  el.focus();
  let s = el.value;
  el.value = "";
  el.value = s;
}
