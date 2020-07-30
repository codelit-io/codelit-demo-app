import React from "react";

import "../index.css";

import { questions } from "mocks/question";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "theme";
import QuestionsTable from "containers/AdminPage/Collection/CollectionTable";

// Material
import CssBaseline from "@material-ui/core/CssBaseline";

// Library
import MoBrowserMockup from "components/library/MoBrowserMockup";

export default {
  title: "Admin",
  component: MoBrowserMockup,
  decorators: [withKnobs]
};

export const Table = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionsTable
        questions={questions}
        onUpdateQuestion={event => console.log(event)}
        onRemoveQuestion={id => console.log(id)}
        onCreateQuestion={event => console.log(event)}
        handleRowClick={id => console.log(id)}
      />
    </ThemeProvider>
  );
};
