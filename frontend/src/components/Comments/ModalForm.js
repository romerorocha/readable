import React from 'react';
import { Form, Modal, Message } from 'semantic-ui-react';
import { EMPTY } from '../../util/Constants';

const ModalForm = ({ emptyFields, id, author, body, changeAction }) => {
  return [
    <Modal.Header key="0">Enter your comment:</Modal.Header>,
    <Modal.Content key="1">
      <Form error={emptyFields}>
        <Message
          error
          content="Whoops... You forgot to tell us something! All fields are required :)"
        />
        <Form.Input
          placeholder="Name"
          name="author"
          value={author}
          disabled={id !== EMPTY}
          onChange={changeAction}
        />
        <Form.TextArea
          placeholder="Comment"
          name="body"
          value={body}
          onChange={changeAction}
        />
      </Form>
    </Modal.Content>
  ];
};

export default ModalForm;
