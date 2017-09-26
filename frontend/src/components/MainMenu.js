import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';
import { connect } from 'react-redux';
import { activateMenu } from '../actions';

class MainMenu extends Component {
  handleMenuClick = (_, target) => {
    this.props.activate(target.name);
    this.navigateTo(target.name);
  };

  navigateTo = path => {
    path = path === 'home' ? '/' : '/'.concat(path);
    this.props.history.push(path);
  };

  render() {
    const { activeMenu } = this.props;

    return (
      <Container fluid>
        <Menu icon="labeled" pointing secondary color="blue">
          <Menu.Item
            name="home"
            active={activeMenu === 'home'}
            onClick={this.handleMenuClick}
          >
            <Icon name="home" />
            home
          </Menu.Item>
          <CategoriesMenu action={this.handleMenuClick} />
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeMenu: state.activeMenu
  };
};

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(MainMenu)
);
