import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CategoriesMenu extends Component {
  render() {
    const { categories, activeMenu, action } = this.props;

    return Object.keys(categories).length === 0
      ? false
      : categories.map(category => (
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
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    activeMenu: state.activeMenu
  };
};

export default connect(mapStateToProps)(CategoriesMenu);
