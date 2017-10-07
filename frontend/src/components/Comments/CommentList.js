import React, { Component } from 'react';
import { Header, Comment, Button } from 'semantic-ui-react';
import CommentItem from './CommentItem';
import ModalForm from './ModalForm';
import { EMPTY } from '../../util/Constants';

class CommentList extends Component {
  state = {
    open: false,
    id: EMPTY,
    body: EMPTY,
    author: EMPTY
  };

  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    const { comments, vote, remove } = this.props;
    const { open, body, author, id } = this.state;

    return [
      <Header key="0" as="h3" dividing>
        Comments ({comments.length})
      </Header>,
      <Button key="1" content="Add Comment" onClick={() => this.show()} />,
      <ModalForm
        open={open}
        key="2"
        closeAction={this.close}
        changeAction={this.handleChange}
        submitAction={this.handleSubmit}
        id={id}
        body={body}
        author={author}
      />,
      <Comment.Group key="3">
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
    this.props.save(id, author, body);
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
      id: EMPTY,
      author: EMPTY,
      body: EMPTY
    });
}

export default CommentList;
