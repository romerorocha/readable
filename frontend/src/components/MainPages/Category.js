import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../../actions/UI';
import { fetchPostsByCategory } from '../../actions/posts';
import Breadcrumbs from '../Misc/Breadcrumbs';
import CategoryPosts from '../Post/CategoryPosts';

class Category extends Component {
  componentDidMount() {
    this.initComponent();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.initComponent();
    }
  }

  initComponent() {
    const { category } = this.props.match.params;
    this.props.activate(category);
    this.props.fetchPosts(category);
  }

  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props;

    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category={category} />
        <Divider />
        <CategoryPosts category={category} existingCategories={categories} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.entities.categories.map(category => category.name)
});

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchPosts(category) {
    dispatch(fetchPostsByCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
