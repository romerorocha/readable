import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../../actions/UI';
import { NEW_POST } from '../../util/Constants';
import { Container, Divider, Form, Button } from 'semantic-ui-react';
import Breadcrumbs from '../Misc/Breadcrumbs';
import capitalize from 'lodash/capitalize';

class NewPost extends Component {
  state = {
    category: 'react',
    author: '',
    title: '',
    body: ''
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const categories = this.getCategories();
    const { category, author, title, body } = this.state;

    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category="new post" />
        <Divider />
        <Form>
          <Form.Field>
            <label>Category</label>
            <Form.Dropdown
              placeholder="Select Category"
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
            <label>Your name</label>
            <Form.Input
              placeholder="Name"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Post Title</label>
            <Form.Input
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Text</label>
            <Form.TextArea
              autoHeight
              placeholder="Whatever you are thinking..."
              name="body"
              value={body}
              onChange={this.handleChange}
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
