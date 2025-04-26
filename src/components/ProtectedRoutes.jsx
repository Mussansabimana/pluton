// src/components/ProtectedRoutes.js
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

// Protected route for authenticated users
export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

// Route for specific roles (student, company, admin)
export const RoleProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to="/not-authorized" />;
};

// // Route for guests only (like login/register pages)
// export const GuestRoute = () => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <Loading />;
//   }

//   return !user ? <Outlet /> : <Navigate to="/" />;
// };
