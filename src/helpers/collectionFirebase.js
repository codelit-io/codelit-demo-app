import * as ROUTES from "constants/routes";
import { questionMock } from "mocks/question";

/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Helper tools for firestore collections
 *
 * A set of helper functions and they are help in different operations with questions
 * such as adding, editing and deleting a question. All data is queried from Firebase
 */

/* ---🥇 Question helpers for Firestore 🥇--- */

/* Create Question
 * createQuestion(authUser, event, firebase, match)
 */
export const createQuestion = async (authUser, event, firebase, match) => {
  if (!event?.title || !event?.title) {
    return;
  }

  // create question by id
  await firebase.createQuestionById(match.params.collection, {
    ...event,
    id: Number(match.params.questionId),
    userId: authUser.uid,
    createdAt: firebase.fieldValue.serverTimestamp(),
    question: event?.question ? escapeCode(event.question) : ""
  });

  const increment = firebase.fieldValue.increment(1);

  const payload = {
    // doc: match.params.collection,
    itemsLength: increment
  };

  // update courses with number of questions
  // await updateCourse(authUser, payload, firebase);
  await updateStats(payload, firebase, match);
};

/* Remove Question
 * removeQuestion(id, firebase, match)
 */
export const removeQuestion = async (id, firebase, match) => {
  await firebase
    .doc("courses/" + match.params.collection + "/questions", id)
    .delete();
};

/* Edit and update Question
 * updateQuestion(event, firebase, match)
 */
export const updateQuestion = async (event, firebase, match) => {
  if (!match.params.collection) {
    return;
  }

  await firebase
    .doc("courses/" + match.params.collection + "/questions", String(event.uid))
    .update({
      ...event,
      id: Number(match.params.questionId),
      editedAt: firebase.fieldValue.serverTimestamp(),
      question: event?.question ? escapeCode(event.question) : ""
    });
};

/* Update stats for questions
 * updateStats(event, firebase, match)
 */
export const updateStats = async (event, firebase, match) => {
  if (!match.params.collection) {
    return;
  }

  await firebase
    .doc("courses/" + match.params.collection + "/questions", "--stats--")
    .update(event);
};

/* Click on Question
 * rowClick(id, history, match)
 */
export const rowClick = (id, history, match) => {
  history.push(
    ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
  );
};

export const escapeCode = code => {
  if (!code) {
    return;
  }
  return JSON.stringify(code, null, 2);
};

/* ---🥈 Course helpers for Firestore 🥈--- */

/* Create Course
 * createCourse(authUser, event, firebase, match)
 */
export const createCourse = async (authUser, event, firebase) => {
  if (!event?.title || !event?.title) {
    return;
  }
  // Generate random id to post fix each document id
  const randomId = Math.random()
    .toString(36)
    .substring(7);
  // Create doc based on title name, doc is lowercase without spaces
  const cleanTitle = event?.title.replace(/\s+/g, "-").toLowerCase();
  // Final Id for storing
  const doc = `${cleanTitle}-${randomId}`;

  const payload = {
    ...event,
    doc,
    id: 1,
    userId: authUser.uid,
    createdAt: firebase.fieldValue.serverTimestamp()
  };

  await firebase
    .collection("courses")
    .doc(doc)
    .set(payload, { merge: true });

  // Add a questions array to the collection created above add a placeholder entry
  // TODO: figure a more efficient way to do this with one firebase query
  await firebase
    .collection("courses")
    .doc(doc)
    .collection("questions")
    .doc()
    .set({ ...questionMock });
};

export const updateCourse = async (authUser, event, firebase) => {
  const payload = {
    ...event,
    userId: authUser.uid,
    editedAt: firebase.fieldValue.serverTimestamp()
  };
  await firebase
    .collection("courses")
    .doc(event.doc)
    .set(payload, { merge: true });
};
