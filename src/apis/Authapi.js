import api from "./axios";

export const loginApi = async (credentials, role) => {
  const { data } = await api.post(`/auth/${role}/login`, credentials);
  return data;
};

export const registerApi = async (formData, role) => {
  const { data } = await api.post(`/auth/${role}/register`, formData);
  return data;
};

export const logoutApi = async (role) => {
  const { data } = await api.post(`/auth/${role}/logout`);
  return data;
};

// export const resendOtpApi = async (email, role) => {
//   const { data } = await api.post(`/auth/${role}/resend-otp`, { email });
//   return data;
// };

// export const verifyEmailApi = async (email, otp, role) => {
//   const { data } = await api.post(`/auth/${role}/verify-email`, { email, otp });
//   return data;
// };

// export const forgotPasswordApi = async (email, role) => {
//   const { data } = await api.post(`/auth/${role}/forgot-password`, { email });
//   return data;
// };

// export const resetPasswordApi = async (token, newPassword, role) => {
//   const { data } = await api.post(`/auth/${role}/reset-password`, {
//     token,
//     newPassword
//   });
//   return data;
// };