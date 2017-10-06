import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../../actions/UI';
import { NEW_POST } from '../../util/Constants';
import { Container, Divider } from 'semantic-ui-react';
import Breadcrumbs from '../Misc/Breadcrumbs';

class NewPost extends Component {
  componentDidMount() {
    this.props.activate(NEW_POST);
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category="new post" />
        <Divider />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  }
});

export default connect(null, mapDispatchToProps)(NewPost);
