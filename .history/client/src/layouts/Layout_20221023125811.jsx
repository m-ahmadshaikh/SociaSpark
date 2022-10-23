import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default function Layout() {
  return (
    <div>
      <Container />
      <Outlet />
    </div>
  );
}
