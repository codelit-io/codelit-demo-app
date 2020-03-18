import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text
    }));
  };

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);

    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;

    return (
      <ListItem>
        {editMode ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEditText}
          />
        ) : (
          <span>
            {message.text}
            {message.editedAt && <span>(Edited)</span>}
          </span>
        )}

        {authUser.uid === message.userId && (
          <div>
            {editMode ? (
              <span>
                <Button onClick={this.onSaveEditText}>Save</Button>
                <Button onClick={this.onToggleEditMode}>Reset</Button>
              </span>
            ) : (
              <Button onClick={this.onToggleEditMode}>Edit</Button>
            )}

            {!editMode && (
              <Button
                type="button"
                onClick={() => onRemoveMessage(message.uid)}
              >
                Delete
              </Button>
            )}
          </div>
        )}
      </ListItem>
    );
  }
}

export default MessageItem;
