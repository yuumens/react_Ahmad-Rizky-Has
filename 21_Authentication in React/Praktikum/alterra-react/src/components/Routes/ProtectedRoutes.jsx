import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../utils/auth';

export default function ProtectedRoute() {
    if (auth.isAuthorized()) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  }
