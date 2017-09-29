import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import SortedPosts from '../containers/SortedPosts';

class Category extends Component {
  componentWillMount() {
    this.props.activate(this.props.match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    const category = nextProps.match.params.category;

    if (this.props.match.params.category !== category) {
      this.props.activate(category);
    }
  }

  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props;

    return (
      <Container fluid>
        <Header as="h3">{category}</Header>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
