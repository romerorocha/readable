import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import { fetchAllPosts } from '../actions/posts';
import { Container, Item, Header, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const items = posts.map(post => ({
      childKey: post.id,
      image: {
        src: require(`../img/${post.category}.png`),
        size: 'tiny'
      },
      header: post.title,
      meta: post.author,
      extra: (
        <Grid>
          <Grid.Column>
            <Link to="/postform">
              <Icon name="write" color="black" size="large" />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/postform">
              <Icon name="remove" color="black" size="large" />
            </Link>
          </Grid.Column>
        </Grid>
      )
    }));

    return (
      <Container>
        <Header as="h3" dividing>
          Posts by vote score
        </Header>
        <Item.Group items={items} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchPosts() {
    dispatch(fetchAllPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
