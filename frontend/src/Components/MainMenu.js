import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import CategoriesMenu from './CategoriesMenu';

class MainMenu extends Component {
  state = {
    activeMenu: '/'
  };

  handleMenuClick = (_, target) => {
    this.setState({ activeMenu: target.name });
    this.navigateTo(target.name);
  };

  navigateTo = path => {
    if (path !== '/') {
      path = `/category/${path}`;
    }
    this.props.history.push(path);
  };

  render() {
    const { categories } = this.props;
    const { activeMenu } = this.state;

    return (
      <Container>
        <Menu icon="labeled" pointing secondary color="blue">
          <Menu.Item
            name="/"
            active={activeMenu === '/'}
            onClick={this.handleMenuClick}
          >
            <Icon name="home" />
            home
          </Menu.Item>
          <CategoriesMenu
            categories={categories}
            activeMenu={activeMenu}
            action={this.handleMenuClick}
          />
        </Menu>
      </Container>
    );
  }
}

export default withRouter(MainMenu);
