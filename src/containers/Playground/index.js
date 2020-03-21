import React, { useState } from "react";

import CodeEditor from "../../components/CodeEditor";
import MoPageHeader from "../../components/shared/MoPageHeader";

const Playground = () => {
  const initialState = {
    answer: "<button> I am a Button </button>",
    element: "button",
    id: "0",
    isCorrect: false,
    label: "Write JSX code",
    question: `<section>
    <h1>I am a Heading 1</h1>

    <p>I am a Paragraph</p>

    <button>I am a button</button>

    <input type="text" placeholder="I am a text input"/>
</section>`,
    status: "😴",
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
    <>
      <MoPageHeader img="" title="React Playground" />
      <CodeEditor
        handleOnChange={userAnswer => handleOnChange(userAnswer)}
        question={question}
      />
    </>
  );
};

export default Playground;
