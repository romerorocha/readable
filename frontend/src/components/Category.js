import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';

class Category extends Component {
  componentWillMount() {
    //TODO Melhorar duplicação de chamadas
    this.props.activate(this.props.match.params.category);
  }

  render() {
    const { category } = this.props.match.params;
    const { categories } = this.props;

    const categoryFound = (
      <Container fluid>
        <h1>{category}</h1>
      </Container>
    );

    return categories.includes(category) ? categoryFound : <Container />;
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
