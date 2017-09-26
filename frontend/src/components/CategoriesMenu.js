import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CategoriesMenu extends Component {
  render() {
    const { categories, activeMenu, action } = this.props;

    if (categories === null || Object.keys(categories).length === 0) {
      return <Container />;
    }

    return (
      <Container fluid>
        {categories.map(category => (
          <Menu.Item
            key={category.path}
            name={category.name}
            active={category.path === activeMenu}
            onClick={action}
          >
            <Icon name="tag" />
            {category.name}
          </Menu.Item>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    activeMenu: state.activeMenu
  };
};

export default connect(mapStateToProps)(CategoriesMenu);
