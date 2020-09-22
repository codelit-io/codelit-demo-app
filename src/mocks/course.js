export const course = {
  id: "123",
  question: [],
  title: "Test Course",
};

export const collections = {
  courses: [
    {
      id: 0,
      isDisabled: false,
      question: [],
      title: "Html",
      type: "html",
      subtitle: "Learn Html",
      doc: "html",
    },
    {
      id: 1,
      isDisabled: false,
      question: [],
      title: "JavaScript",
      type: "js",
      subtitle: "Learn JavaScript",
      doc: "js",
    },
    {
      id: 2,
      isDisabled: true,
      question: [],
      title: "React",
      type: "reactJsx",
      subtitle: "Learn React",
      doc: "react",
    },
  ],
  "courses/html/questions": [
    {
      id: "1",
      title: "Html",
      subtitle: "Learn Basic Html Coding",
      questions: [
        {
          id: "1",
          label: "hello",
          title: "hello",
          question: "Hello World",
          answer: "<p>Hello React</p>",
        },
      ],
    },
  ],
  "courses/js/questions": [
    {
      id: "1",
      title: "JavaScript",
      subtitle: "Learn Basic JavaScript in JSX",
      questions: [{ id: "1" }],
    },
  ],
  "courses/react/questions": [
    {
      id: "1",
      title: "React",
      subtitle: "Learn Basic to Advanced ",
      questions: [{ id: "1" }],
    },
  ],
};
