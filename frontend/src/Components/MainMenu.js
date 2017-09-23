import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class MainMenu extends Component {
  state = {
    activeItem: 'home'
  };

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { categories } = this.props;
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu stackable>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleMenuClick}
          >
            Home
          </Menu.Item>
          {categories.map(category => (
            <Menu.Item
              key={category.path}
              name={category.name}
              active={activeItem === category.path}
              onClick={this.handleMenuClick}
            >
              {category.name}
            </Menu.Item>
          ))}
        </Menu>
      </Container>
    );
  }
}

export default MainMenu;
