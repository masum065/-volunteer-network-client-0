import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { Col, Container, Row } from 'react-bootstrap';
import googleIcon from '../../images/icons/google.png';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../Header/Logo/Logo';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <p style={{ display: 'none' }}>{loggedInUser.email}</p>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col className='mt-4' md={12}>
            <Logo />
          </Col>
          <Col md={6}>
            <div className='login-form'>
              <form
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <h3 className='title'>Login With</h3>

                <button onClick={handleGoogleSignIn} className='api-login'>
                  <img src={googleIcon} alt='' />
                  Continue with Google
                </button>

                <p>
                  Don’t have an account? <span>Create an account</span>
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
