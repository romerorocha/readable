import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import CategoriesMenu from './CategoriesMenu';
import HomeMenu from './HomeMenu';
import { connect } from 'react-redux';
import { activateMenu } from '../../actions/activateMenu';
import { fetchCategories } from '../../actions/categories';

class MainMenu extends Component {
  componentWillMount() {
    this.props.fetchMenuItens();
  }

  render() {
    const { categories, activeMenu } = this.props;

    return (
      <Menu icon="labeled" pointing secondary color="blue">
        <HomeMenu activeMenu={activeMenu} />
        <CategoriesMenu
          categories={categories}
          activeMenu={activeMenu}
          action={this.handleMenuClick}
        />
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
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchMenuItens() {
    dispatch(fetchCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
