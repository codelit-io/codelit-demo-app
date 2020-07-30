import React, { useState } from "react";

import "../index.css";

import {
  select,
  withKnobs,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "theme";
import Typist from "react-typist";

// Material
import CssBaseline from "@material-ui/core/CssBaseline";

// Library
import MoBrowserMockup from "components/library/MoBrowserMockup";
import MoConfetti from "components/library/MoConfetti";
import CodeEditor from "components/shared/CodeEditor";

export default {
  title: "Code editor",
  component: MoBrowserMockup,
  decorators: [withKnobs]
};

export const BrowserMockup = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoBrowserMockup isEditor={boolean("Code editor mode", true)}>
        Code goes here
      </MoBrowserMockup>
    </ThemeProvider>
  );
};

export const Confetti = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoConfetti isActive={boolean("Active", true)} />
    </ThemeProvider>
  );
};

export const Editor = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  const initialState = {
    answer: "<button> I am a Button </button>",
    language: "jsx",
    element: "button",
    id: "0",
    isCorrect: false,
    question: `() => {
      return (
        <section>
          <h1>I love React</h1>
        </section>
      );
    };`,
    isPlayground: true
  };

  const [question, setQuestion] = useState(initialState);

  const handleOnChange = ({ userAnswer }) => {
    if (userAnswer === "{}" || userAnswer === "") {
      return;
    }
    setQuestion({ ...question, question: userAnswer });
  };

  const options = {
    range: true,
    min: 1,
    max: 12,
    step: 1
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CodeEditor
        codeAnswer={"Write Question Here"}
        codeLanguage={select("language", ["html", "jsx"], "jsx", "language")}
        codeQuestion={question?.question}
        isEditMode={boolean("Edit mode", false)}
        isConsole={boolean("Show console", false)}
        isPlayground={true}
        handleOnChange={userAnswer => handleOnChange(userAnswer)}
        sm={number("Small devices", 12, options, "Column")}
        md={number("Medium devices", 12, options, "Column")}
        title={text("Code editor title", "JSX Editor")}
      />
    </ThemeProvider>
  );
};

export const CodeTypist = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  const options = [
    {
      range: true,
      min: 0,
      max: 200,
      step: 1
    },
    {
      range: true,
      min: 0,
      max: 100,
      step: 1
    },
    {
      range: true,
      min: 0,
      max: 5000,
      step: 1
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typist
        avgTypingDelay={number(
          "Avg typing delay",
          60,
          options[0],
          "avgTypingDelay"
        )}
        d
        stdTypingDelay={number(
          "Std typing delay",
          30,
          options[1],
          "stdTypingDelay"
        )}
        startDelay={number("Start delay", 200, options[2], "startDelay")}
        cursor={{
          show: boolean("Display", true),
          blink: boolean("Blink", false),
          hideWhenDone: boolean("Hide when done", true)
        }}
      >
        Welcome to the Jungle ! 🍌
      </Typist>
    </ThemeProvider>
  );
};
