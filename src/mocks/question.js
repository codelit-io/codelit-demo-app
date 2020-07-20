export const question = () => {
  return {
    answer: "<button> I am a Button </button>",
    language: "jsx",
    element: "button",
    id: 0,
    isCorrect: false,
    question: `() => {
          return (
            <section>
              <h1>I love React 💙</h1>
            </section>
          );
        };`,
    isPlayground: true
  };
};

export const questionMock = {
  id: 1,
  question: "<p>Hello React</p>",
  answer: "Answer goes here",
  title: "My first question",
  subtitle: "My first question",
  label: "My first question"
};
