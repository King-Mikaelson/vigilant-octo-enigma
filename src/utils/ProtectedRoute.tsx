import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hooks';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const user = useAppSelector((state) => state.user);
  let location = useLocation();
  console.log(user.user);

  if (!user.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
