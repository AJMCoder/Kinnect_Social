import { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const {data} = await axios.get('https://kinnect-api-cf0f665319fa.herokuapp.com/dj-rest-auth/user/')
      setCurrentUser(data)
    } catch(err) {
      console.error("Error response:", err.response?.data);
    }
  }

  useEffect(() => {
    handleMount()
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  )
};