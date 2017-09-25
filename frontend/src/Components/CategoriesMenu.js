import React from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';

const CategoriesMenu = ({ categories = [], activeMenu, action }) => {
  return (
    <Container>
      {categories.map(category => (
        <Menu.Item
          key={category.path}
          name={category.name}
          active={activeMenu === category.path}
          onClick={action}
        >
          <Icon name="tag" />
          {category.name}
        </Menu.Item>
      ))}
    </Container>
  );
};

export default CategoriesMenu;
