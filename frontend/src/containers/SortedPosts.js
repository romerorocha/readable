import { connect } from 'react-redux';
import Posts from '../components/Post/Posts';
import { sortPostsBy } from '../actions/posts';

const getSortedPosts = (posts, sortBy) => {
  return posts.slice().sort((a, b) => b[sortBy] - a[sortBy]);
};

const mapStateToProps = state => {
  return {
    posts: getSortedPosts(state.posts, state.postsSorting)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortBy: sortBy => {
      dispatch(sortPostsBy(sortBy));
    }
  };
};

const SortedPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default SortedPosts;
