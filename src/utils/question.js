/* Next Question
 * nextQuestion(history, match, question)
 */
export const nextQuestion = (history, match, question) => {
  const id = Number(question.id) + 1;
  /* Clear questions */
  setQuestion({});

  /* Clear matchPercent */
  setMatchPercent();

  setIsCorrect(false);
  /* A delay before navigating to a new page */
  setTimeout(() => {
    history.push(
      ROUTES.COLLECTIONS.path + "/" + match.params.collection + "/" + id
    );
  }, 600);
};
