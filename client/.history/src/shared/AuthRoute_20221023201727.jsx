import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function AuthRoute() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.user) {
    navigate('/');
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
