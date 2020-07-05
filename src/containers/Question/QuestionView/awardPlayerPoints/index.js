const awardPlayerPoints = (authUser, firebase, questionId, collection) => {
  /* TODO Change the source of authUser to the HOC */

  const nextLevelReqPoints = Number(questionId);

  if (authUser) {
    /* Prevents overwriting player points if played older questions */
    /* TODO move me */

    if (authUser.reports?.[collection]) {
      const userPoints = authUser.reports[collection]['points'];
      const points =
        nextLevelReqPoints > userPoints ? nextLevelReqPoints : userPoints;

      /* Update user profile in db with points object of current question collection in db  */

      firebase
        .user(authUser.uid)
        .set({ reports: { [collection]: { points } } }, { merge: true });
    } else {
      /* First time user */
      firebase
        .user(authUser.uid)
        .set({ reports: { [collection]: { points: 1 } } }, { merge: true });
    }
  } else {
    console.log('User not signed up');
  }
};

export default awardPlayerPoints;
