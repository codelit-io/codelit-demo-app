import * as ROUTES from "constants/routes";
import { statsMock } from "mocks/question";

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

// Special document each course has to keep track of number of items in a course and other stuff coming later
const statsDoc = "--stats--";

// Questions path to list of questions used with firebase query
const getQuestionsPath = match =>
  `courses/${match.params.collection}/questions`;

/* ---🥇 Question helpers for Firestore 🥇--- */

/* Create Question
 * createQuestion(authUser, event, firebase, match)
 */
export const createQuestion = async (authUser, event, firebase, match) => {
  if (!event?.title || !event?.title) {
    return;
  }

  const getStatsDoc = await firebase
    .collection(getQuestionsPath(match))
    .doc(statsDoc)
    .get();

  const stats = getStatsDoc.data();
  const newId = Number(stats.itemsLength) + 1;
  // create question by id
  await firebase.createQuestionById(match.params.collection, {
    ...event,
    // order new item to the end by creating id from total num of items + 1
    id: newId,
    userId: authUser.uid,
    createdAt: firebase.fieldValue.serverTimestamp(),
    question: event?.question ? escapeCode(event.question) : ""
  });

  // increment a field in the stats doc
  const increment = firebase.fieldValue.increment(1);

  const payload = {
    itemsLength: increment
  };

  const collectionPath = getQuestionsPath(match);

  // Update stats doc and increment itemsLength
  await updateStats(payload, firebase, collectionPath);
  return newId;
};

/* Remove Question
 * removeQuestion(id, firebase, match)
 */
export const removeQuestion = async (id, firebase, match) => {
  await firebase.doc(getQuestionsPath(match), id).delete();

  // decrement a field in the stats doc
  const decrement = firebase.fieldValue.increment(-1);

  const payload = {
    itemsLength: decrement
  };
  const collectionPath = getQuestionsPath(match);
  // Update stats doc and decrement itemsLength
  await updateStats(payload, firebase, collectionPath);
};

/* Edit and update Question
 * updateQuestion(event, firebase, match)
 */
export const updateQuestion = async (event, firebase, match) => {
  if (!match.params.collection) {
    return;
  }

  await firebase.doc(getQuestionsPath(match), String(event.uid)).update({
    ...event,
    id: Number(match.params.questionId),
    editedAt: firebase.fieldValue.serverTimestamp(),
    question: event?.question ? escapeCode(event.question) : ""
  });

  return Number(match.params.questionId);
};

/* Update stats for questions
 * updateStats(event, firebase, collectionPath)
 */
export const updateStats = async (event, firebase, collectionPath) => {
  if (!collectionPath) {
    return;
  }

  await firebase.doc(collectionPath, statsDoc).update(event);
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

  // Add a stats doc to the collection created above as a placeholder entry
  // TODO: figure a more efficient way to do this with one firebase query
  await firebase
    .collection("courses")
    .doc(doc)
    .collection("questions")
    .doc(statsDoc)
    .set({ ...statsMock });

  // return new item doc
  return doc;
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
  return event.id;
};
