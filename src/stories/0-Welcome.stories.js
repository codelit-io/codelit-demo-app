import React from "react";

import "../index.css";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "theme";

// Material
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// SVG
import { ReactComponent as Researching } from "assets/researching.svg";
import { ReactComponent as SourceCode } from "assets/sourceCode.svg";
import { ReactComponent as PageNotFound } from "assets/page_not_found.svg";

import { linkTo } from "@storybook/addon-links";
import MoTypography from "components/library/MoTypography";
import MoPage from "components/library/MoPage";
import Typist from "react-typist";
import MoPaper from "components/library/MoPaper";

export default {
  title: "Welcome",
  component: MoTypography,
  decorators: [withKnobs],
};

const Welcome = () => {
  const theme = getTheme({ isDarkMode: boolean("Dark mode", false) });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <MoTypography
          color={boolean("Dark mode", false)}
          font="breeSerif"
          variant={`h${number(
            "Heading",
            4,
            { min: 1, max: 6 },
            "Heading number"
          )}`}
        >
          <Typist
            avgTypingDelay={60}
            stdTypingDelay={30}
            startDelay={200}
            cursor={{
              show: true,
              blink: false,
              hideWhenDone: true,
            }}
          >
            {text("Text", "Mo Skool")}
          </Typist>
        </MoTypography>
        <MoPage isLoading={false}>
          <Grid container spacing={4}>
            <Grid item md="6">
              <MoPaper textAlign="left" maxWidth="lg">
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h1"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h2"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h3"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h4"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h5"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="h6"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="subtitle1"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="subtitle2"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="body1"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="body2"
                >
                  Bree Serif
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="button"
                >
                  Can you read this?
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="caption"
                >
                  Can you read this?
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="breeSerif"
                  variant="overline"
                >
                  Can you read this?
                </MoTypography>
              </MoPaper>
            </Grid>
            <Grid item md="6">
              <MoPaper textAlign="left" maxWidth="lg">
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h1"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h2"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h3"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h4"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h5"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="h6"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="subtitle1"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="subtitle2"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="body1"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="body2"
                >
                  Open Sans
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="button"
                >
                  Can you read this?
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="caption"
                >
                  Can you read this?
                </MoTypography>
                <MoTypography
                  color={boolean("Dark mode", false)}
                  font="openSans"
                  variant="overline"
                >
                  Can you read this?
                </MoTypography>
              </MoPaper>
            </Grid>
            <Grid item md="6">
              <MoPaper textAlign="left" maxWidth="lg">
                <Researching style={{ width: "100%" }} />
              </MoPaper>
            </Grid>
            <Grid item md="6">
              <MoPaper textAlign="left" maxWidth="lg">
                <PageNotFound style={{ width: "100%" }} />
              </MoPaper>
            </Grid>
            <Grid item md="6">
              <MoPaper textAlign="left" maxWidth="lg">
                <SourceCode style={{ width: "100%" }} />
              </MoPaper>
            </Grid>
          </Grid>
        </MoPage>
      </Container>
    </ThemeProvider>
  );
};

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;

ToStorybook.story = {
  name: "Mo Skool",
};
