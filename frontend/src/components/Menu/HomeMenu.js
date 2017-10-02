import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { ALL_POSTS } from '../../util/Constants';
import { Link } from 'react-router-dom';

const HomeMenu = ({ activeMenu }) => {
  return (
    <Link to="/">
      <Menu.Item name={ALL_POSTS} active={activeMenu === ALL_POSTS}>
        <Icon name="registered" />
        Readable
      </Menu.Item>
    </Link>
  );
};

export default HomeMenu;
