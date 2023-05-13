import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

export default function PrivateRoute() {
  const { loggedIn, checkingState } = useAuthStatus();
  if (checkingState) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />;
}
