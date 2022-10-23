import React, { Component, useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdEx8itc4NVqrCzunXFl1KDohvPbDQ4ezQtOnASPb&s"
          alt="Wireframe"
        />
      </Segment>
    </div>
  );
}
