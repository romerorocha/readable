import { connect } from 'react-redux';
import Posts from './Posts';
import { sortPostsBy } from '../../actions/posts';

const getSortedPosts = (posts, sortBy) => {
  switch (sortBy) {
    case 'TIMESTAMP':
      return posts.slice().sort((a, b) => b.timestamp - a.timestamp);
    case 'VOTE_SCORE':
      return posts.slice().sort((a, b) => b.voteScore - a.voteScore);
    default:
      return posts;
  }
};

const mapStateToProps = state => {
  return {
    posts: getSortedPosts(state.posts, state.postsSortedBy)
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
