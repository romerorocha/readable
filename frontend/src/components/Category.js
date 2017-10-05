import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/UI';
import { fetchPostsByCategory } from '../actions/posts';
import SortedPosts from '../containers/SortedPosts';
import Error404 from './Error404';
import Breadcrumbs from './Breadcrumbs';

class Category extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.activate(category);
    this.props.fetchPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    const category = nextProps.match.params.category;
    if (this.props.match.params.category !== category) {
      this.props.activate(category);
      this.props.fetchPosts(category);
    }
  }

  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props;

    return (
      <Container>
        <Breadcrumbs category={category} />
        <Divider />
        {categories.includes(category) ? <SortedPosts /> : <Error404 />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.map(category => category.name)
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
