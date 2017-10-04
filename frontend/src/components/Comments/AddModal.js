import React, { Component } from 'react';
import { connect } from 'react-redux';
import UUID from 'uuid/v1';
import { addComment } from '../../actions/comments';
import { Modal, Button } from 'semantic-ui-react';
import AddForm from './AddForm';

class AddModal extends Component {
  state = {
    open: false
  };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return [
      <Button key="0" content="Add Comment" onClick={() => this.show()} />,
      <Modal key="1" dimmer open={open} onClose={this.close}>
        <Modal.Header>Enter your comment:</Modal.Header>
        <AddForm close={this.close} save={this.props.saveComment} />
      </Modal>
    ];
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveComment(body, author) {
    const comment = {
      id: UUID(),
      timestamp: Date.now(),
      parentId: ownProps.postId,
      author,
      body
    };
    dispatch(addComment(comment));
  }
});

export default connect(null, mapDispatchToProps)(AddModal);
