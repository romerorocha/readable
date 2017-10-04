import React from 'react';
import { Form, Message, Modal } from 'semantic-ui-react';

const AddForm = ({ author, body, change, emptyFields, dismiss }) => {
  return (
    <Modal.Content>
      {emptyFields && (
        <Message
          error
          onDismiss={dismiss}
          content="Whoops... You forgot to tell us something! All fields are required :)"
        />
      )}
      <Form>
        <Form.Input
          required
          placeholder="Name"
          name="author"
          value={author}
          onChange={change}
        />
        <Form.TextArea
          required
          placeholder="Comment"
          name="body"
          value={body}
          onChange={change}
        />
      </Form>
    </Modal.Content>
  );
};

export default AddForm;
