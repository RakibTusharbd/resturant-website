import React, { useContext, useState } from 'react';
import {Button,Form} from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGooglePlay } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/friebase.config';
const Login = () => {
  const [error,setError] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  console.log('login page location',location)
  const from = location?.state?.from?.pathname || '/';
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result => {
      const loddedUser = result.user;
      console.log(loddedUser)
      navigate(from)
    })
    .catch(error =>{
      console.log(error)
      setError(error.message)
    })
  }
  const auth = getAuth(app);
  console.log(app)
  const provider = new GoogleAuthProvider();
  const handleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.log('error',error.message))
  }
  const providers = new GithubAuthProvider();
  const handleGithubSignIn = () =>{
    signInWithPopup(auth,providers)
    .then( result => {
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error => console.log(error))
  }
    return (
       <div className='container mx-auto w-25 bg-info p-5 mt-4 rounded'>
        <h2 className='fw-bolder text-white'>Pleace Login:</h2>
        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Button  variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
      Dont have an Accound ? <Link to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
    <p className='text-danger'>{error}</p>
    <div className=''>
    <Button onClick={handleSignIn} variant="outline-danger"><span><FaGooglePlay/></span> Gogle Sign In</Button>
      <br />
      <br />
      <Button onClick={handleGithubSignIn} variant="outline-danger"><span><FaGithub></FaGithub></span>  GitHub Sign-in</Button>
    </div>
       </div>
    );
};

export default Login;