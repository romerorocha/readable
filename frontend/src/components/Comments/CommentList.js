import React, { Component } from 'react';
import { Comment, Button, Modal } from 'semantic-ui-react';
import CommentItem from './CommentItem';
import ModalForm from './ModalForm';
import ModalActions from './ModalActions';

class CommentList extends Component {
  state = {
    open: false,
    emptyFields: false,
    id: '',
    body: '',
    author: ''
  };

  render() {
    const { comments, vote, remove } = this.props;
    const { open, emptyFields, body, author, id } = this.state;

    return [
      <Button key="0" content="Add Comment" onClick={() => this.show()} />,
      <Modal key="1" dimmer open={open} onClose={this.close}>
        <ModalForm
          emptyFields={emptyFields}
          changeAction={this.handleChange}
          id={id}
          body={body}
          author={author}
        />
        <ModalActions submit={this.handleSubmit} close={this.close} />
      </Modal>,
      <Comment.Group key="2">
        {comments &&
          comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              voteAction={vote}
              removeAction={remove}
              editAction={this.handleEditing}
            />
          ))}
      </Comment.Group>
    ];
  }

  handleSubmit = () => {
    const { id, author, body } = this.state;

    if (author === '' || body === '') {
      this.setState({ emptyFields: true });
    } else {
      this.saveComment(id, author, body);
    }
  };

  saveComment = (id, author, body) => {
    if (id !== '') {
      this.props.update(id, body);
    } else {
      this.props.addNew(author, body);
    }
    this.close();
  };

  handleEditing = comment => {
    const { id, author, body } = comment;
    this.setState({ id, author, body });
    this.show();
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  show = () => this.setState({ open: true });

  close = () =>
    this.setState({
      open: false,
      emptyFields: false,
      id: '',
      author: '',
      body: ''
    });
}

export default CommentList;
