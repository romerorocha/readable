import { connect } from 'react-redux';
import Posts from '../components/Post/Posts';
import { ALL_POSTS } from '../util/Constants';
import { voteOnPost } from '../actions/posts';

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
  const posts = Object.keys(state.posts).map(key => state.posts[key]);
  return {
    posts: getPosts(posts, state.postsSorting, state.activeMenu)
  };
};

const mapDispatchToProps = dispatch => ({
  voteAction: (id, vote) => {
    dispatch(voteOnPost(id, vote));
  }
});

const SortedPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default SortedPosts;
