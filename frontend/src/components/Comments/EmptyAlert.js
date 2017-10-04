import React from 'react';
import { Message } from 'semantic-ui-react';

const EmptyAlert = ({ emptyFields }) => {
  return (
    emptyFields && (
      <Message
        error
        content="Whoops... You forgot to tell us something! All fields are required :)"
      />
    )
  );
};

export default EmptyAlert;
