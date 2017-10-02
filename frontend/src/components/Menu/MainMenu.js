import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import CategoriesMenu from './CategoriesMenu';
import HomeMenu from './HomeMenu';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';

class MainMenu extends Component {
  componentWillMount() {
    this.props.fetchMenuItens();
  }

  render() {
    const { categories, activeMenu } = this.props;

    return (
      <Menu stackable icon="labeled" inverted color="black">
        <HomeMenu activeMenu={activeMenu} />
        <CategoriesMenu categories={categories} activeMenu={activeMenu} />
        <Menu.Item position="right">
          <Icon name="newspaper" />
          New Post
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    activeMenu: state.activeMenu
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMenuItens() {
    dispatch(fetchCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
