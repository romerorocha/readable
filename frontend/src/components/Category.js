import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import { fetchPostsByCategory } from '../actions/posts';
import SortedPosts from '../containers/SortedPosts';

class Category extends Component {
  componentWillMount() {
    const category = this.props.match.params.category;
    this.props.activate(category);
    this.props.fetchPosts(category); //TODO verificar se precisa mesmo consultar os posts todas as vezes
  }

  componentWillReceiveProps(nextProps) {
    const category = nextProps.match.params.category;
    if (this.props.match.params.category !== category) {
      this.props.activate(category);
      this.props.fetchPosts(category); //TODO verificar se precisa mesmo consultar os posts todas as vezes
    }
  }

  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props;

    return (
      <Container fluid>
        <Header as="h3">{category}</Header>
        <Divider />
        {categories.includes(category) && <SortedPosts />}
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
