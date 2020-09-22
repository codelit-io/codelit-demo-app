import React from "react";

import "../index.css";

import { withKnobs, boolean } from "@storybook/addon-knobs";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "theme";

// Material
import CssBaseline from "@material-ui/core/CssBaseline";

// Library
import MoAvatar from "components/library/MoAvatar";
import MoSkoolLogo from "components/library/MoSkoolLogo";
import MoBreadcrumbs from "components/library/MoSkoolLogo";

export default {
  title: "Navigation",
  component: MoBreadcrumbs,
  decorators: [withKnobs],
};

export const Avatar = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoAvatar
        authUser={{ photoUrl: "" }}
        isAdmin={boolean("Admin", false)}
        firebase={{ signOut: () => {} }}
      />
    </ThemeProvider>
  );
};

export const Logo = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoSkoolLogo />
    </ThemeProvider>
  );
};

export const BreadCrumbs = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  const breadcrumbsOptions = [
    {
      title: "Back to question",
      url: `/courses/match.params.collection/match.params.questionId`,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MoBreadcrumbs breadcrumbsOptions={breadcrumbsOptions} />
    </ThemeProvider>
  );
};

MoBreadcrumbs.story = {
  name: "to Storybook",
};
