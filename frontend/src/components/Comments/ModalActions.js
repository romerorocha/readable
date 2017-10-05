import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const ModalActions = ({ close, submit }) => {
  return (
    <Modal.Actions>
      <Button onClick={close} content="Cancel" />
      <Button
        primary
        icon="checkmark"
        labelPosition="right"
        content="Comment!"
        onClick={submit}
      />
    </Modal.Actions>
  );
};

export default ModalActions;
