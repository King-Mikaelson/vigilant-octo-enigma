import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hooks';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const UnprotectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user, loading, session } = useAppSelector((state) => state.user);
  let location = useLocation();
  console.log(user.user);
  if (!session) return <div></div>;
  return user ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    children
  );
};

export default UnprotectedRoute;
