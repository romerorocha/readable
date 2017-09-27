import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const HomeMenu = ({ activeMenu, action }) => {
  return (
    <Menu.Item name="/" active={activeMenu === '/'} onClick={action}>
      <Icon name="home" />
      home
    </Menu.Item>
  );
};

export default HomeMenu;
