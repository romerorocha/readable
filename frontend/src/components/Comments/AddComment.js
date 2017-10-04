import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid/v1';
import { addComment } from '../../actions/comments';
import { Modal, Button } from 'semantic-ui-react';
import AddForm from './AddForm';
import FormActions from './FormActions';

class AddComment extends Component {
  state = {
    emptyFields: false,
    open: false,
    body: '',
    author: ''
  };

  render() {
    const { open, author, body, emptyFields } = this.state;

    return [
      <Button key="0" content="Add Comment" onClick={() => this.show()} />,
      <Modal key="1" dimmer open={open} onClose={this.close}>
        <Modal.Header>Enter your comment:</Modal.Header>
        <AddForm
          author={author}
          body={body}
          dismiss={this.handleDismiss}
          change={this.handleChange}
          emptyFields={emptyFields}
        />
        <FormActions close={this.close} submit={this.handleSubmit} />
      </Modal>
    ];
  }

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false, emptyFields: false });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDismiss = () => this.setState({ emptyFields: false });

  handleSubmit = () => {
    const { author, body } = this.state;
    if (author === '' || body === '') {
      this.setState({ emptyFields: true });
      return;
    }

    this.saveComment(author, body);
    this.setState({ author: '', body: '', emptyFields: false });
    this.close();
  };

  saveComment = (author, body) => {
    const comment = {
      id: UUID(),
      timestamp: Date.now(),
      parentId: this.props.postId,
      author,
      body
    };
    this.props.saveComment(comment);
  };
}

const mapDispatchToProps = dispatch => ({
  saveComment(comment) {
    dispatch(addComment(comment));
  }
});

export default connect(null, mapDispatchToProps)(AddComment);
