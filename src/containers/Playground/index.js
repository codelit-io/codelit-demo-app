import React, { useState } from "react";

import CodeEditor from "components/CodeEditor";
import MoHelmet from "components/shared/MoHelmet";

const Playground = () => {
  const initialState = {
    answer: "<button> I am a Button </button>",
    language: "jsx",
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
    isPlayground: true,
  };

  const [question, setQuestion] = useState(initialState);

  const handleOnChange = (userAnswer) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    setQuestion({ ...question, question: userAnswer });
  };

  return (
    <>
      <MoHelmet
        title="Moskool - React frontend development playground"
        description="MoSkool - Try out free React development playground, master JavaScript, Html and Css without the fees"
      />
      <CodeEditor
        handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
        md={12}
        sm={12}
        question={question}
      />
    </>
  );
};

export default Playground;
