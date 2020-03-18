import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { AuthUserContext } from "../Session";
import MessageList from "./MessageList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Spinner from "../shared/Spinner";
import { withFirebase } from "../Firebase";
import PageHeader from "../shared/PageHeader";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import MoPage from "../shared/MoPage";

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      loading: false,
      messages: [],
      limit: 15
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .messages()
      .orderBy("createdAt", "desc")
      .limit(this.state.limit)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let messages = [];
          snapshot.forEach(doc =>
            messages.push({ ...doc.data(), uid: doc.id })
          );
          this.setState({
            messages: messages.reverse(),
            loading: false
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    if (this.state.text) {
      this.props.firebase.messages().add({
        text: this.state.text,
        userId: authUser.uid,
        createdAt: this.props.firebase.fieldValue.serverTimestamp()
      });

      this.setState({ text: "" });
    }
    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;

    this.props.firebase.message(message.uid).update({
      ...messageSnapshot,
      text,
      editedAt: this.props.firebase.fieldValue.serverTimestamp()
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).delete();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 15 }),
      this.onListenForMessages
    );
  };

  render() {
    const { text, messages, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <>
            <PageHeader img="" title="New Feature Requests" />
            <Spinner loading={loading} color="primary" />
            <Grid container spacing={4}>
              <Grid item md={6} sm={12} xs={12}>
                {messages && (
                  <MessageList
                    authUser={authUser}
                    messages={messages}
                    onEditMessage={this.onEditMessage}
                    onRemoveMessage={this.onRemoveMessage}
                  />
                )}

                {!messages && <div>There are no messages ...</div>}
                {!loading && messages && (
                  <Button variant="text" onClick={this.onNextPage}>
                    <ExpandMoreIcon />
                    See previous posts
                  </Button>
                )}
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <MoPage title="Post a request" loading={loading} isCard={true}>
                  <form
                    onSubmit={event => this.onCreateMessage(event, authUser)}
                  >
                    <Grid container spacing={6}>
                      <Grid item md={6} sm={12}>
                        <Input
                          type="text"
                          value={text}
                          placeholder="Use more colors!@?"
                          onChange={this.onChangeText}
                        />
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Post your request <PostAddIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </MoPage>
              </Grid>
            </Grid>
          </>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);
