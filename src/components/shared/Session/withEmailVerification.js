import React from "react";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes("password");
/* TODO: Upgrade email verification */
const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .sendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return (
        /* TODO: 🔴 merge this into withAuthentication */
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <div>
                {this.state.isSent ? (
                  <p>
                    Email confirmation sent: Check your Emails (Spam folder
                    included) for a confirmation Email. Refresh this page once
                    you confirmed your Email.
                  </p>
                ) : (
                  <p>
                    Verify your Email: Check your Emails (Spam folder included)
                    for a confirmation Email or send another confirmation Email.
                  </p>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.onSendEmailVerification}
                  disabled={this.state.isSent}
                >
                  Send confirmation Email
                </Button>
              </div>
            ) : (
              <Component {...this.props} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
