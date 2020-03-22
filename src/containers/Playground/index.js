import React, { useState } from "react";

import CodeEditor from "../../components/CodeEditor";

const Playground = () => {
  const initialState = {
    answer: "<button> I am a Button </button>",
    element: "button",
    id: "0",
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

  const [question, setQuestion] = useState(initialState);

  const handleOnChange = userAnswer => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    setQuestion({ ...question, question: userAnswer });
  };

  return (
    <CodeEditor
      handleOnChange={userAnswer => handleOnChange(userAnswer)}
      md={12}
      sm={12}
      question={question}
    />
  );
};

export default Playground;
