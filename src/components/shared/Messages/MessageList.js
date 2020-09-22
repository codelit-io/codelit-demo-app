import React from "react";

import List from "@material-ui/core/List";

import MessageItem from "./MessageItem";

const MessageList = ({
  authUser,
  messages,
  onEditMessage,
  onRemoveMessage
}) => (
  <List>
    {messages.map((message) => (
      <MessageItem
        authUser={authUser}
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </List>
);

export default MessageList;
