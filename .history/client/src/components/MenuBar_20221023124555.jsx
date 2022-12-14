import React, { Component, useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}
