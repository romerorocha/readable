import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import { ALL_POSTS } from '../../util/Constants';
import { activateMenu } from '../../actions/UI';
import { fetchAllPosts } from '../../actions/posts';
import SortedPosts from '../../containers/SortedPosts';
import Breadcrumbs from '../Misc/Breadcrumbs';

class Home extends Component {
  componentDidMount() {
    this.props.activate(ALL_POSTS);
    this.props.fetchPosts();
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category="all posts" />
        <Divider />
        <SortedPosts />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchPosts() {
    dispatch(fetchAllPosts());
  }
});

export default connect(null, mapDispatchToProps)(Home);
