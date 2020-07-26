/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName retry
 *
 *
 * retry is used with React lazy imports to retry imports if an error
 * happen with an import
 *
 * deploying a new code to prod causes cashing issues, and viewers
 * won't be served new code. Instead crashing their browser for not
 * finding the old code.
 *
 * @param {CallableFunction} fn - function that  needs to be recalled after an error
 * @param {Number} retriesLeft - number of attempts to call the function
 * @param {Number} interval - interval between function calls
 */

export const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};
