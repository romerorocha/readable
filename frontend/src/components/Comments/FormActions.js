import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const FormActions = ({ close, submit }) => {
  return (
    <Modal.Actions>
      <Button onClick={close}>Cancel</Button>
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

export default FormActions;
