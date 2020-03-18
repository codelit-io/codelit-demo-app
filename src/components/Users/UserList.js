import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Spinner from "../../components/shared/Spinner";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase.users().onSnapshot(snapShot => {
      let users = [];
      snapShot.forEach(doc => users.push({ ...doc.data(), uid: doc.id }));

      this.setState({
        users: users,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        {loading && <Spinner loading={loading} />}
        <List>
          {users.map(user => (
            <Link
              key={user.uid}
              variant="body2"
              to={{
                pathname: `${ROUTES.ADMIN_USERS.path}/${user.uid}`,
                state: { user }
              }}
            >
              <ListItem>
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
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}

export default withFirebase(UserList);
