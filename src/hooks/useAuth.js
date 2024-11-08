import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    setError(null);
    try {
      const response = await api.post('/auth/login', credentials);
      const userData = response.data; 
      console.log('Login successful:', userData);

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); 
      localStorage.setItem("userEmail", userData.email); 
      localStorage.setItem("userName", userData.full_name); 

      if (userData.role === 'ADMIN') {
        navigate('/backoffice-dashboard');
      } else if (userData.role === 'tenant') {
        navigate('/tenant-dashboard');
      } else if (['PO', 'PM'].includes(userData.role)) {
        navigate('/pm-dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return { user, login, error };
};

export default useAuth;
