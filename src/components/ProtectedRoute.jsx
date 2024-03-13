  import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({isLogged}) {
  return (
    isLogged ? <Outlet /> : <Navigate to="/" />
  )
}
