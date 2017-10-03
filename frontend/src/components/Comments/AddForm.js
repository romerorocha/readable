import React, { Component } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import UUID from 'uuid/v1';

class AddForm extends Component {
  state = {
    open: false,
    body: '',
    author: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { author, body } = this.state;

    let comment = {};
    comment.id = UUID();
    comment.timestamp = Date.now();
    comment.parentId = this.props.postId;
    comment.author = author;
    comment.body = body;

    this.close();

    console.log(comment);
  };

  createComment = () => {};

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, author, body } = this.state;

    return [
      <Button key="0" onClick={() => this.show()}>
        Add Comment
      </Button>,

      <Modal key="1" dimmer open={open} onClose={this.close}>
        <Modal.Header>Enter your comment:</Modal.Header>
        <Modal.Content>
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
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.close}>
            Cancel
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Comment!"
            onClick={this.handleSubmit}
          />
        </Modal.Actions>
      </Modal>
    ];
  }
}

export default AddForm;
