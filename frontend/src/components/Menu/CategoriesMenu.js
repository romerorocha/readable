import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const CategoriesMenu = ({ categories, activeMenu, action }) => {
  return categories.map(category => (
    <Menu.Item
      key={category.path}
      name={category.name}
      active={category.path === activeMenu}
      onClick={action}
    >
      <Icon name={category.icon} />
      {category.name}
    </Menu.Item>
  ));
};

export default CategoriesMenu;
