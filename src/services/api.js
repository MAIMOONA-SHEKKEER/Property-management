import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8085/api', 
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export const registerUser = (data) => api.post('/user-management/register-user', data);
export const registerProperty = (data) => api.post('/prop-management-service/register-prop', data);
export const uploadDocument = (data) => api.post('/document-service/upload', data);

const API_URL = 'http://localhost:5000/api';

export const addPropertyDetails = async (propertyDetails) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, propertyDetails);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to add property details');
  }
};

export const getLeaseTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/lease-templates`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve lease templates');
  }
};

export const createLeaseTemplate = async (templateName) => {
  try {
    const response = await axios.post(`${API_URL}/lease-templates`, { name: templateName });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to create lease template');
  }
};

export const getLeaseAgreements = async () => {
  try {
    const response = await axios.get(`${API_URL}/lease-agreements`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve lease agreements');
  }
};

export const confirmLeaseAgreement = async (agreementId) => {
  try {
    const response = await axios.post(`${API_URL}/lease-agreements/confirm/${agreementId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to confirm lease agreement');
  }
};

export const submitApplication = async (applicationData) => {
  try {
    const response = await axios.post(`${API_URL}/applications`, applicationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to submit application');
  }
};

export const getApplicationStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/applications/status`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve application status');
  }
};
