import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

const CategoriesMenu = ({ categories, activeMenu }) => {
  return categories.map(category => (
    <Link to={`/${category.path}`} key={category.path}>
      <Menu.Item name={category.name} active={category.path === activeMenu}>
        <Icon name={category.icon} />
        {capitalize(category.name)}
      </Menu.Item>
    </Link>
  ));
};

export default CategoriesMenu;
