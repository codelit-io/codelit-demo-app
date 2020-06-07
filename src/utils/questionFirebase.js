import * as ROUTES from "constants/routes";

/* Create Question
 * createQuestion(authUser, event, firebase, match)
 */
export const createQuestion = (authUser, event, firebase, match) => {
  if (event?.label) {
    firebase.createQuestionById(match.params.collection, {
      ...event,
      id: Number(event.id),
      userId: authUser.uid,
      createdAt: firebase.fieldValue.serverTimestamp(),
      question: escapeCode(event.question),
    });
  }
};

/* Edit Question
 * editQuestion(event, firebase, match)
 */
export const editQuestion = (event, firebase, match) => {
  console.log(event);
  if (!match.params.collection) {
    return;
  }
  firebase
    .doc("courses/" + match.params.collection + "/questions", event.uid)
    .update({
      ...event,
      id: Number(event.id),
      editedAt: firebase.fieldValue.serverTimestamp(),
      question: escapeCode(event.question),
    });
};

/* Remove Question
 * removeQuestion(id, firebase, match)
 */
export const removeQuestion = (id, firebase, match) => {
  firebase
    .doc("courses/" + match.params.collection + "/questions", id)
    .delete();
};

/* Remove Question
 * rowClick(id, history, match)
 */
export const rowClick = (id, history, match) => {
  history.push(
    ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
  );
};

export const escapeCode = (code) => {
  return JSON.stringify(code, null, 2);
};
