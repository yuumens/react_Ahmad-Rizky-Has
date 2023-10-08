// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import auth from '../utils/auth';

export default function PrivateRoutes () {
  const location = useLocation();
	const { pathname } = location;

	let path = "/login";

	if (pathname !== "/")
		path += `?return_to=${pathname.slice(1, pathname.length)}`;

	if (auth.isAuthorized()) {
		return <Outlet />;
	}

	return <Navigate to={path} />;
};


