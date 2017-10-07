import React, { Component } from 'react';
import { EMPTY } from '../../util/Constants';
import { connect } from 'react-redux';
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
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const categories = this.getCategories();
    const { category, author, title, body } = this.state;

    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category="new post" />
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Dropdown
              placeholder="Select Category"
              required
              label="Category"
              fluid
              search
              selection
              options={categories}
              name="category"
              value={category}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Your name"
              required
              placeholder="Name"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Post Title"
              required
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              label="Text"
              required
              autoHeight
              placeholder="Whatever you are thinking..."
              name="body"
              value={body}
              onInput={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
