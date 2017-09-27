import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const CategoriesMenu = ({ categories, activeMenu, action }) => {
  const categoriesMenu = categories.map(category => (
    <Menu.Item
      key={category.path}
      name={category.name}
      active={category.path === activeMenu}
      onClick={action}
    >
      <Icon name="tag" />
      {category.name}
    </Menu.Item>
  ));

  return Object.keys(categories).length > 0 ? categoriesMenu : null;
};

export default CategoriesMenu;
