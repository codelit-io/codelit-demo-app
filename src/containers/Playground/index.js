/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Playground Component 🚕
 *
 * This page is accessed from the landing page and it renders the CodeEditor
 * Playground can be used to play around with code and preview code live
 * @returns {<CodeEditor />}
 *
 * */

import React, { useState } from "react";

import CodeEditor from "components/shared/CodeEditor";

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

  const handleOnChange = ({ userAnswer }) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    setQuestion({ ...question, question: userAnswer });
  };

  return (
    <>
      <CodeEditor
        codeAnswer={"Write Question Here"}
        codeLanguage={question?.language}
        codeQuestion={question?.question}
        isEditMode={true}
        isConsole={true}
        isPlayground={true}
        handleOnChange={(userAnswer) => handleOnChange(userAnswer)}
        sm={12}
        md={12}
        title="JSX Editor"
      />
    </>
  );
};

export default Playground;
