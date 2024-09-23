import NavBar from "./components/NavBar";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefault';
import Registration from './pages/auth/RegistrationForm';
import SignInForm from './pages/auth/SignInForm';




function App() {
  

  return (
    
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
      
  );
}

export default App;