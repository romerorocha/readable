import React from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';
import { EMPTY } from '../../util/Constants';

const ModalForm = ({
  id,
  author,
  body,
  changeAction,
  submitAction,
  closeAction,
  open
}) => {
  return (
    <Modal dimmer open={open} onClose={closeAction}>
      <Modal.Header>Enter your comment:</Modal.Header>,
      <Modal.Content>
        <Form onSubmit={submitAction}>
          <Form.Input
            placeholder="Name"
            name="author"
            required
            value={author}
            disabled={id !== EMPTY}
            onChange={changeAction}
          />
          <Form.TextArea
            placeholder="Comment"
            required
            name="body"
            value={body}
            onChange={changeAction}
          />
          <Button
            type="submit"
            primary
            icon="checkmark"
            labelPosition="right"
            content="Comment!"
          />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
