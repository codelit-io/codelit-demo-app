import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import { withFirebase } from "../Firebase";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase
      .user(this.props.match.params.id)
      .onSnapshot(snapshot => {
        this.setState({
          user: snapshot.data(),
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.passwordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div>
        <h2>{this.props.match.params.id}</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <br></br>
            <span>
              <strong>Email:</strong> {user.email}
            </span>
            <br></br>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <br></br>
            <span>
              <Button type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </Button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(UserItem);
