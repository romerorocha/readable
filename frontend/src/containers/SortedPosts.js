import { connect } from 'react-redux';
import Posts from '../components/Post/Posts';
import { ALL_POSTS } from '../util/Constants';

const getPosts = (posts, field, category) => {
  switch (category) {
    case ALL_POSTS:
      return posts.slice().sort((a, b) => b[field] - a[field]);
    default:
      return posts
        .filter(post => post.category === category)
        .sort((a, b) => b[field] - a[field]);
  }
};

// const descendingSort = sortBy => {
//   return ;
// };

const mapStateToProps = state => {
  return {
    posts: getPosts(state.posts, state.postsSorting, state.activeMenu)
  };
};

const SortedPosts = connect(mapStateToProps)(Posts);

export default SortedPosts;
