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

// Set the base URL for your API
const API_URL = 'http://localhost:5000/api'; // Update this to your backend URL

// Function to add property details
export const addPropertyDetails = async (propertyDetails) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, propertyDetails);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to add property details');
  }
};

// Function to get lease templates
export const getLeaseTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/lease-templates`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve lease templates');
  }
};

// Function to create a lease template
export const createLeaseTemplate = async (templateName) => {
  try {
    const response = await axios.post(`${API_URL}/lease-templates`, { name: templateName });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to create lease template');
  }
};

// Function to get lease agreements
export const getLeaseAgreements = async () => {
  try {
    const response = await axios.get(`${API_URL}/lease-agreements`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve lease agreements');
  }
};

// Function to confirm lease agreement
export const confirmLeaseAgreement = async (agreementId) => {
  try {
    const response = await axios.post(`${API_URL}/lease-agreements/confirm/${agreementId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to confirm lease agreement');
  }
};

// Function to submit an application
export const submitApplication = async (applicationData) => {
  try {
    const response = await axios.post(`${API_URL}/applications`, applicationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to submit application');
  }
};

// Function to get application status
export const getApplicationStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/applications/status`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve application status');
  }
};
