import { connect } from 'react-redux';
import { ALL_POSTS } from '../util/Constants';
import { voteOnPost } from '../actions/posts';
import PostList from '../components/Post/List/PostList';

const getPosts = (posts, field, activeCategory) => {
  switch (activeCategory) {
    case ALL_POSTS:
      return posts.slice().sort((a, b) => b[field] - a[field]);
    default:
      return posts
        .filter(post => post.category === activeCategory)
        .sort((a, b) => b[field] - a[field]);
  }
};

const mapStateToProps = state => {
  const posts = Object.keys(state.entities.posts).map(
    key => state.entities.posts[key]
  );
  return {
    posts: getPosts(posts, state.ui.postsSorting, state.ui.activeMenu)
  };
};

const mapDispatchToProps = dispatch => ({
  voteAction: (id, vote) => {
    dispatch(voteOnPost(id, vote));
  }
});

const SortedPosts = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default SortedPosts;
