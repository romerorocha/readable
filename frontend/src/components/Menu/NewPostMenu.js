import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NEW_POST } from '../../util/Constants';
import { Link } from 'react-router-dom';

const NewPostMenu = ({ activeMenu }) => {
  return (
    <Link to="/posts/edit">
      <Menu.Item
        name={NEW_POST}
        position="right"
        active={activeMenu === NEW_POST}
      >
        <Icon name="newspaper" />
        New Post
      </Menu.Item>
    </Link>
  );
};

export default NewPostMenu;
