import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

export default function PrivateRoute() {
  const { loggedIn, checkingState } = useAuthStatus();
  if (checkingState) {
    return <h3>Loading...</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to='/signin' />;
}
