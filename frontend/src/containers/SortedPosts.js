import { connect } from 'react-redux';
import Posts from '../components/Post/Posts';
import { ALL_POSTS } from '../util/Constants';

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
  return {
    posts: getPosts(state.posts, state.postsSorting, state.activeMenu)
  };
};

const SortedPosts = connect(mapStateToProps)(Posts);

export default SortedPosts;
