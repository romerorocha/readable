import React, { Component } from 'react';
import { Button, Menu, Sidebar } from 'semantic-ui-react';

class PostSidebar extends Component {
  state = { actionBar: false };

  toggleVisibility = () => this.setState({ actionBar: !this.state.actionBar });

  render() {
    const { post } = this.props;
    const { actionBar } = this.state;

    return [
      <Button.Group key="0" floated="right">
        <Button basic icon="thumbs up" />
        <Button.Or
          text={
            post.voteScore > 0 ? '+'.concat(post.voteScore) : post.voteScore
          }
        />/>
        <Button basic icon="thumbs down" />
        <Button basic onClick={this.toggleVisibility} icon="setting" />
      </Button.Group>,
      <Sidebar
        key="1"
        as={Menu}
        animation="overlay"
        direction="top"
        visible={actionBar}
        inverted
      >
        <Menu.Menu position="right">
          <Menu.Item icon="write" name="Edit" />
          <Menu.Item icon="trash" name="Delete" />
          <Menu.Item icon="close" onClick={this.toggleVisibility} />
        </Menu.Menu>
      </Sidebar>
    ];
  }
}

export default PostSidebar;
