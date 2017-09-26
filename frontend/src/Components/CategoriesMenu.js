import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

class CategoriesMenu extends Component {
  render() {
    const { categories, activeMenu, action } = this.props;

    return (
      <Container>
        {!categories || categories.lenght === 0 ? (
          <Container />
        ) : (
          categories.map(category => (
            <Menu.Item
              key={category.path}
              name={category.name}
              active={activeMenu === category.path}
              onClick={action}
            >
              <Icon name="tag" />
              {category.name}
            </Menu.Item>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = categories => categories;

const mapDispatchToProps = dispatch => ({
  getCategories() {
    dispatch(fetchCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);
