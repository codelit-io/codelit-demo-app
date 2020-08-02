/* TODO: Update me to a functional component and add comments */

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ACCOUNT } from "constants/i18n";
import Container from "@material-ui/core/Container";
import Navigation from "components/shared/Navigation";
import {
  withEmailVerification,
  withAuthentication
} from "components/shared/Session";
import PasswordForgetForm from "components/shared/PasswordForgot";
import PasswordChangeForm from "components/shared/PasswordChange";
import MoPage from "components/library/MoPage";
import Typography from "@material-ui/core/Typography";

const SIGN_IN_METHODS = [
  {
    id: "password",
    provider: null
  },
  {
    id: "google.com",
    provider: "googleProvider"
  },
  {
    id: "facebook.com",
    provider: "facebookProvider"
  },
  {
    id: "twitter.com",
    provider: "twitterProvider"
  }
];

const AccountPage = ({ authUser, firebase }) => {
  return (
    <Container maxWidth="lg">
      <Navigation authUser={authUser} firebase={firebase} />
      <MoPage title={ACCOUNT.PAGE_TITLE} isLoading={false}>
        <Typography variant="h6" noWrap>
          Email: {authUser?.email}
        </Typography>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <LoginManagement authUser={authUser} firebase={firebase} />
      </MoPage>
    </Container>
  );
};

class LoginManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null
    };
  }

  componentDidMount() {
    this.props.authUser && this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then(activeSignInMethods =>
        this.setState({ activeSignInMethods, error: null })
      )
      .catch(error => this.setState({ error }));
  };

  onSocialLoginLink = provider => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onDefaultLoginLink = password => {
    const credential = this.props.firebase.emailAuthProvider.credential(
      this.props.authUser.email,
      password
    );

    this.props.firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onUnlink = providerId => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  render() {
    const { activeSignInMethods, error } = this.state;

    return (
      <div>
        <List>
          {SIGN_IN_METHODS.map(signInMethod => {
            const onlyOneLeft = activeSignInMethods.length === 1;
            const isEnabled = activeSignInMethods.includes(signInMethod.id);

            return (
              <ListItem key={signInMethod.id}>
                {signInMethod.id === "password" ? (
                  <DefaultLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onDefaultLoginLink}
                    onUnlink={this.onUnlink}
                  />
                ) : (
                  <SocialLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onSocialLoginLink}
                    onUnlink={this.onUnlink}
                  />
                )}
              </ListItem>
            );
          })}
        </List>
        {error && error.message}
      </div>
    );
  }
}

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink
}) =>
  isEnabled ? (
    <Button
      color="primary"
      type="button"
      onClick={() => onUnlink(signInMethod.id)}
      disabled={onlyOneLeft}
    >
      Deactivate {signInMethod.id}
    </Button>
  ) : (
    <Button
      color="primary"
      type="button"
      onClick={() => onLink(signInMethod.provider)}
    >
      Link {signInMethod.id}
    </Button>
  );

class DefaultLoginToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { passwordOne: "", passwordTwo: "" };
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.onLink(this.state.passwordOne);
    this.setState({ passwordOne: "", passwordTwo: "" });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onlyOneLeft, isEnabled, signInMethod, onUnlink } = this.props;

    const { passwordOne, passwordTwo } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return isEnabled ? (
      <Button
        type="button"
        onClick={() => onUnlink(signInMethod.id)}
        disabled={onlyOneLeft}
      >
        Deactivate {signInMethod.id}
      </Button>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder={ACCOUNT.NEW_PASSWORD}
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder={ACCOUNT.CONFIRM_NEW_PASSWORD}
        />

        <Button disabled={isInvalid} type="submit">
          Link {signInMethod.id}
        </Button>
      </form>
    );
  }
}

export default compose(
  /* TODO: Upgrade email verification -- BROKEN -- */
  withEmailVerification,
  withAuthentication(false)
)(AccountPage);
