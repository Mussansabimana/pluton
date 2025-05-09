import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../apis/axios"
import {
  loginApi,
  registerApi,
  logoutApi
} from '../apis/Authapi'
import Loading from '../components/Loading';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true)
        const { data } = await api.get('/auth/me');
        setUser(data.user)
      } catch (error) {
        navigate("/")
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);
  
  const login = async (email, password, role) => {
    try {
      const response = await loginApi({ email, password }, role);
      setUser(response.user);
      
      // Redirect based on role
      switch(response.user.role) {
        case 'student':
          navigate('/student-dashboard');
          break;
        case 'company':
          navigate('/company-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/');
      }
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const registerStudent = async (formData) => {
    try {
      const response = await registerApi(formData, 'student');
      return { 
        success: true, 
        message: 'Registration successful.',
        email: response.email
      };
    } catch (error) {
      return { 
        success: false, 
        message: error
      };
    }
  };

  const registerCompany = async (formData) => {
    try {
      const response = await registerApi(formData, 'company');
      return { 
        success: true, 
        message: 'Registration successful! Please check your email for verification.',
        email: response.email
      };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  // const verifyOtp = async (email, otp, role) => {
  //   try {
  //     await verifyEmailApi(email, otp, role);
  //     return { 
  //       success: true, 
  //       message: 'Email verified successfully! You can now login.' 
  //     };
  //   } catch (error) {
  //     return { 
  //       success: false, 
  //       message: error.response?.data?.message || 'Verification failed' 
  //     };
  //   }
  // };

  // const resendOtp = async (email, role) => {
  //   try {
  //     await resendOtpApi(email, role);
  //     return { 
  //       success: true, 
  //       message: 'New verification code sent to your email!' 
  //     };
  //   } catch (error) {
  //     return { 
  //       success: false, 
  //       message: error.response?.data?.message || 'Failed to resend code' 
  //     };
  //   }
  // };

  const logout = async (role) => {
    try {
      await logoutApi(role);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const value = {
    user,
    loading,
    login,
    registerStudent,
    registerCompany,
    // verifyOtp,
    // resendOtp,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading/> : children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}