import * as ROUTES from "constants/routes";
/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName questionFirebase
 *
 * A set of helper functions and they are help in different operations with questions
 * such as adding, editing and deleting a question. All data is queried from Firebase
 */

/* Create Question
 * createQuestion(authUser, event, firebase, match)
 */
export const createQuestion = (authUser, event, firebase, match) => {
  if (!event?.label) {
    return;
  }
  firebase.createQuestionById(match.params.collection, {
    ...event,
    id: Number(event.id),
    userId: authUser.uid,
    createdAt: firebase.fieldValue.serverTimestamp(),
    question: event?.question ? escapeCode(event.question) : "",
  });
};

/* Edit Question
 * editQuestion(event, firebase, match)
 */
export const editQuestion = (event, firebase, match) => {
  if (!match.params.collection) {
    return;
  }
  firebase
    .doc("courses/" + match.params.collection + "/questions", event.uid)
    .update({
      ...event,
      id: Number(event.id),
      editedAt: firebase.fieldValue.serverTimestamp(),
      question: event?.question ? escapeCode(event.question) : "",
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
  if (!code) {
    return;
  }
  return JSON.stringify(code, null, 2);
};
