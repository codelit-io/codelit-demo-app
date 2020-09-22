import React, { Component } from "react";

import * as ROUTES from "constants/routes";
import { withFirebase } from "components/shared/Firebase";
import Grid from "@material-ui/core/Grid";
import MoSpinner from "components/library/MoSpinner";
import MoCard from "components/library/MoCard";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    this.unsubscribe = this.props.firebase.users().onSnapshot((snapShot) => {
      const users = [];
      snapShot.forEach((doc) => users.push({ ...doc.data(), uid: doc.id }));

      this.setState({
        users,
        isLoading: false
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <MoSpinner isLoading={true} color="primary" />;
    }

    return (
      <Grid container spacing={4} alignItems="center">
        {users.map((user, index) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
            <MoCard
              isDisabled={false}
              title={user.username}
              subtitle={user.email}
              content={user.uid}
              url={`${ROUTES.ADMIN_USERS.path}/${user.uid}`}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withFirebase(UserList);
