import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import StudentRegister from './components/StudentRegister';
import CompanyRegister from './components/CompanyRegister';
import Home from './pages/Home';
import About from './pages/About';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import NotAuthorized from './pages/NotAuthorized';
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute, RoleProtectedRoute } from './components/ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
      <main className="min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
            <Route path="/login" element={<Login />} />
            <Route path="/register/student" element={<StudentRegister />} />
            <Route path="/register/company" element={<CompanyRegister />} />

          <Route path="/not-authorized" element={<NotAuthorized />} />

          {/* Protected routes with role-based access */}
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleProtectedRoute allowedRoles={['student']} />}>
              <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Route>
            
            <Route element={<RoleProtectedRoute allowedRoles={['company']} />}>
              <Route path="/company-dashboard" element={<CompanyDashboard />} />
            </Route>
            
            <Route element={<RoleProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>

          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;