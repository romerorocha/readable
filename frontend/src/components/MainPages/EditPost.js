import React, { Component } from 'react';
import { EMPTY } from '../../util/Constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { activateMenu } from '../../actions/UI';
import { addPost } from '../../actions/posts';
import { NEW_POST } from '../../util/Constants';
import { Container, Divider, Form, Button } from 'semantic-ui-react';
import Breadcrumbs from '../Misc/Breadcrumbs';
import capitalize from 'lodash/capitalize';
import UUID from 'uuid/v1';

class NewPost extends Component {
  state = {
    id: EMPTY,
    category: 'react',
    author: EMPTY,
    title: EMPTY,
    body: EMPTY
  };

  componentDidMount() {
    this.props.activate(NEW_POST);
    this.handleExistingPost();
  }

  handleExistingPost() {
    const post = this.props.location.state;
    if (post) {
      this.setState(post);
    }
  }

  getCategories() {
    return this.props.categories.map(category => ({
      key: category.path,
      value: category.path,
      text: capitalize(category.name)
    }));
  }

  handleSubmit = () => {
    this.props.save(this.state);
    this.props.history.push('/');
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const categories = this.getCategories();
    const { category, author, title, body, id } = this.state;

    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category="post edit" />
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Dropdown
            required
            label="Category"
            placeholder="Select Category"
            disabled={id !== EMPTY}
            fluid
            search
            selection
            options={categories}
            name="category"
            value={category}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Your name"
            placeholder="Name"
            disabled={id !== EMPTY}
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Post Title"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Text"
            required
            autoHeight
            placeholder="Whatever you are thinking..."
            name="body"
            value={body}
            onInput={this.handleChange}
          />
          <Button
            primary
            icon="checkmark"
            labelPosition="right"
            type="submit"
            content="Submit"
          />
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.entities.categories
});

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  save(post) {
    if (post.id === EMPTY) {
      post.id = UUID();
      post.timestamp = Date.now();
      dispatch(addPost(post));
    }
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPost)
);
