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
    isPlayground: true,
  };
};

export const statsMock = {
  id: 0,
  itemsLength: 0,
  title: "Stats",
  subtitle: "Question stats",
  isDisabled: true,
};

export const questionMock = {
  id: 1,
  question: "<p>Hello React</p>",
  answer: "Answer goes here",
  title: "My first question",
  subtitle: "My first question",
  label: "My first question",
};

export const questions = [
  {
    id: 1,
    question: "<p>Hello React</p>",
    answer: "Answer goes here",
    title: "My first question",
    subtitle: "My first question",
    label: "My first question",
    match: 10,
  },
  {
    id: 2,
    question: "<h1> Hello React </h1>",
    answer: "Answer goes here",
    title: "My first question",
    subtitle: "My first question",
    label: "My first question",
  },
  {
    id: 3,
    question: "<div>Hello World</div>",
    answer: "Answer goes here",
    title: "My first question",
    subtitle: "My first question",
    label: "My first question",
  },
  {
    id: 4,
    question: "<span>Hello React</span>",
    answer: "Answer goes here",
    title: "My first question",
    subtitle: "My first question",
    label: "My first question",
  },
];
