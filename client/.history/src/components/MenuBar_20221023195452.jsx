import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name === 'logout') {
      console.log('logout');
    }
  };

  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        to="/"
        end
        as={NavLink}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          to="/login"
          as={NavLink}
        />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          to="/register"
          as={NavLink}
        />
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={handleItemClick}
          as={button}
        />
      </Menu.Menu>
    </Menu>
  );
}
