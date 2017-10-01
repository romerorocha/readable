import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Breadcrumb } from 'semantic-ui-react';
import { ALL_POSTS } from '../util/Constants';
import { activateMenu } from '../actions/menu';
import { fetchAllPosts } from '../actions/posts';
import SortedPosts from '../containers/SortedPosts';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.props.activate(ALL_POSTS);
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }} fluid>
        <Breadcrumb size="big">
          <Breadcrumb.Section>home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section active>all posts</Breadcrumb.Section>
        </Breadcrumb>
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
