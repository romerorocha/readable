import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';
import CategoriesMenu from './CategoriesMenu';
import HomeMenu from './HomeMenu';
import NewPostMenu from './NewPostMenu';
import { Menu } from 'semantic-ui-react';

class MainMenu extends Component {
  componentWillMount() {
    this.props.fetchMenuItens();
  }

  render() {
    const { categories, activeMenu } = this.props;

    return (
      <Menu size="tiny" fixed="top" icon="labeled" color="black" inverted>
        <HomeMenu activeMenu={activeMenu} />
        <CategoriesMenu categories={categories} activeMenu={activeMenu} />
        <NewPostMenu activeMenu={activeMenu} />
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.entities.categories,
    activeMenu: state.ui.activeMenu
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMenuItens() {
    dispatch(fetchCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
