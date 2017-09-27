import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <h1>home</h1>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  }
});

export default connect(null, mapDispatchToProps)(Home);
