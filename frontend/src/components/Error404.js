import React from 'react';
import { Message } from 'semantic-ui-react';

const Error404 = () => {
  return (
    <Message
      icon="broken chain"
      header="Error 404"
      content={`Woops. Looks like this page doesn't exist.`}
    />
  );
};

export default Error404;
