import React, { Component } from 'react';
import EmptyAlert from './EmptyAlert';
import { Form, Modal, Button } from 'semantic-ui-react';

class AddForm extends Component {
  state = {
    emptyFields: false,
    body: '',
    author: ''
  };

  handleSubmit = () => {
    const { author, body } = this.state;
    const { save, close } = this.props;

    if (author === '' || body === '') {
      this.setState({ emptyFields: true });
      return;
    }

    save(author, body);
    close();
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { author, body, emptyFields } = this.state;

    return [
      <Modal.Content key="0">
        <EmptyAlert emptyFields={emptyFields} />
        <Form>
          <Form.Input
            placeholder="Name"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <Form.TextArea
            placeholder="Comment"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
        </Form>
      </Modal.Content>,
      <Modal.Actions key="1">
        <Button onClick={this.props.close}>Cancel</Button>
        <Button
          primary
          icon="checkmark"
          labelPosition="right"
          content="Comment!"
          onClick={this.handleSubmit}
        />
      </Modal.Actions>
    ];
  }
}

export default AddForm;
