import React from 'react';
import { Form, Message } from 'semantic-ui-react';

const CommentModal = ({ emptyFields, id, author, body, changeAction }) => {
  return (
    <Form error={emptyFields}>
      <Message
        error
        content="Whoops... You forgot to tell us something! All fields are required :)"
      />
      <Form.Input
        placeholder="Name"
        name="author"
        value={author}
        disabled={id !== ''}
        onChange={changeAction}
      />
      <Form.TextArea
        placeholder="Comment"
        name="body"
        value={body}
        onChange={changeAction}
      />
    </Form>
  );
};

export default CommentModal;
