import React, { useEffect } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefault';
import Registration from './pages/auth/RegistrationForm';
import SignInForm from './pages/auth/SignInForm';
import { useState, createContext } from 'react';

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

function App() {
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
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/register" render={() => <Registration />} />
              <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;