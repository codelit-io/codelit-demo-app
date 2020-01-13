import React from 'react';

import MessageItem from './MessageItem';

import List from "@material-ui/core/List";


const MessageList = ({
  authUser,
  messages,
  onEditMessage,
  onRemoveMessage,
}) => (
  <List component="nav" aria-label="Messages">
    {messages.map(message => (
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
