import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const MessageItem = ({ authUser, message, onEditMessage, onRemoveMessage }) => {
  const [state, setState] = useState({
    editMode: false,
    editText: ""
  });

  const onToggleEditMode = () => {
    setState({
      editMode: !state.editMode,
      editText: message.text
    });
  };

  const onChangeEditText = (event) => {
    setState((prevState) => {
      return { ...prevState, editText: event.target.value };
    });
  };

  const onSaveEditText = () => {
    onEditMessage(message, state.editText);

    setState({ editMode: false });
  };

  return (
    <ListItem>
      {state.editMode ? (
        <input
          type="text"
          value={state.editText}
          onChange={(e) => onChangeEditText(e)}
        />
      ) : (
        <span>
          {message.text}
          {message.editedAt && <span>(Edited)</span>}
        </span>
      )}

      {authUser.uid === message.userId && (
        <div>
          {state.editMode ? (
            <span>
              <Button onClick={() => onSaveEditText()}>Save</Button>
              <Button onClick={() => onToggleEditMode()}>Reset</Button>
            </span>
          ) : (
            <Button onClick={() => onToggleEditMode()}>Edit</Button>
          )}

          {!state.editMode && (
            <Button type="button" onClick={() => onRemoveMessage(message.uid)}>
              Delete
            </Button>
          )}
        </div>
      )}
    </ListItem>
  );
};

export default MessageItem;
