import { createContext, useState, useEffect } from 'react';
import FetchMessages from 'services/fetchMessages';

const FetchStatus = createContext();

const FetchStatusProvider = ({ children }) => {
  const initialState = {
    method: '',
    status: '',
  };

  const [fetch, setFetch] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const ifGETError = fetch.method === 'GET' && fetch.status === 'error';
  
  const fetchAlert = FetchMessages(fetch.method, fetch.status);

  useEffect(() => {
    if (fetchAlert) {
      setShowAlert(true);
      
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [fetchAlert]);
  
  const loading = fetch.status === 'loading' && 'info';
  const error = fetch.status === 'error' && 'error';
  const success = fetch.status === 'success' && 'success';
  const alertColor = loading || error || success;
  
  return (
    <FetchStatus.Provider 
      value={{
        fetch, setFetch, ifGETError, showAlert, alertColor, fetchAlert, 
        videos, setVideos,
        categories, setCategories,
      }}
      >
      {children}
    </FetchStatus.Provider>
  );
};

export { FetchStatus, FetchStatusProvider };
