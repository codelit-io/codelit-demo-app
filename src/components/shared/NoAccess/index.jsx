import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NoAccessSvg } from "assets/noAccess.svg";
import { NO_ACCESS } from "constants/i18n";
import Container from "@material-ui/core/Container";
import Footer from "components/shared/Footer";
import MoPage from "components/library/MoPage";
import Navigation from "components/shared/Navigation";

import useGlobal from "store";

const NoAccess = () => {
  const [{ authUser, firebase }] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <MoPage title={NO_ACCESS.TITLE}>
        <NoAccessSvg
          style={{
            width: "100%",
            display: "block",
            margin: "auto",
            position: "relative"
          }}
          alt="NO_ACCESS.TITLE"
        />
        <center>
          <Link to="/">{NO_ACCESS.BACK_HOME}</Link>
        </center>
        <Footer />
      </MoPage>
    </Container>
  );
};
export default NoAccess;
