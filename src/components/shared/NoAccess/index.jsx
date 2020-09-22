import React from "react";
import { ReactComponent as NoAccessSvg } from "assets/noAccess.svg";
import { NO_ACCESS } from "constants/i18n";
import Container from "@material-ui/core/Container";
import Footer from "components/shared/Footer";
import MoPage from "components/library/MoPage";
import MoButton from "components/library/MoButton";
import Navigation from "components/shared/Navigation";

import useGlobal from "store";
import { Grid } from "@material-ui/core";

const NoAccess = () => {
  const [{ authUser, firebase }] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <MoPage title={NO_ACCESS.TITLE}>
        <Grid container>
          <Grid item md={6}>
            <MoButton
              isArrowIcon={true}
              variant="text"
              size="large"
              text={NO_ACCESS.BACK_HOME}
              href="/"
            />
          </Grid>
          <Grid item md={6}>
            <NoAccessSvg
              style={{
                width: "100%",
                display: "block",
                margin: "auto",
                position: "relative",
              }}
              alt={NO_ACCESS.TITLE}
            />
          </Grid>
        </Grid>
        <Footer />
      </MoPage>
    </Container>
  );
};
export default NoAccess;
