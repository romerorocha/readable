import React from 'react';
import SortedPosts from '../../containers/SortedPosts';
import Error404 from '../Misc/Error404';

const CategoryPosts = ({ category, existingCategories }) => {
  return existingCategories.includes(category) ? <SortedPosts /> : <Error404 />;
};

export default CategoryPosts;
