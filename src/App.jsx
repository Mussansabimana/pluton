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
import "react-toastify/dist/ReactToastify.css";

// import OtpVerification from './components/OtpVerification';

function App() {
  return (
    <AuthProvider>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/student" element={<StudentRegister />} />
          <Route path="/register/company" element={<CompanyRegister />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />

          {/* for otp verification <Route path="/verify-otp" element={<OtpVerification />} /> */}
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;