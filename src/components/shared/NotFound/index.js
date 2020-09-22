import React from "react";

import { ReactComponent as PageNotFound } from "assets/page_not_found.svg";
import { NOT_FOUND } from "constants/i18n";
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
      <MoPage title={NOT_FOUND.TITLE}>
        <Grid container>
          <Grid item md={6}>
            <MoButton
              isArrowIcon={true}
              variant="text"
              size="large"
              text={NOT_FOUND.BACK_HOME}
              href="/"
            />
          </Grid>
          <Grid item md={6}>
            <PageNotFound
              style={{
                width: "100%",
                display: "block",
                margin: "auto",
                position: "relative",
              }}
              alt={NOT_FOUND.TITLE}
            />
          </Grid>
        </Grid>
        <Footer />
      </MoPage>
    </Container>
  );
};
export default NoAccess;
