import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BuildingOfficeIcon, EnvelopeIcon, LockClosedIcon, PhoneIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from "react-toastify";
import Navigation from './Navigation';

export default function CompanyRegister() {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    password: '',
    phonenumber: '',
    location: '',
    trade: '',
    company_description: ''
  });
  const [loading, setLoading] = useState(false);
  const { registerCompany } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await registerCompany(formData);
    setLoading(false);
    
    if (result.success) {
      toast.success(result.message);
      navigate('/login');

      // for email verification
      // navigate('/verify-otp', { state: { email: formData.email,role: "company" } });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xs rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold mb-4">Company Registration</h2>
                <p className="text-blue-100 mb-8">
                  Register your company to find talented interns and grow your business
                </p>
                <img
                  src="https://illustrations.popsy.co/amber/student-graduation.svg"
                  alt="Company Illustration"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 p-8">
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <div className="relative">
                      <BuildingOfficeIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="company_name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="Acme Inc."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="contact@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="••••••"
                        required
                        minLength="6"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <PhoneIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phonenumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="+1234567890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPinIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <div className="relative">
                      <BriefcaseIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                        className="glass-input-form"
                        placeholder="Technology, Finance, etc."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Description
                    </label>
                    <textarea
                      name="company_description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Brief description of your company..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <Link to="/terms" className="text-blue-600 hover:text-blue-500">Terms and Conditions</Link>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Registering...
                        </>
                      ) : (
                        'Register as Company'
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
                    position="bottom-right"
                    pauseOnHover={false}
                    closeOnClick={true}
                  />
    </div>
    </>
  );
}