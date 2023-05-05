import React, { useContext, useState } from 'react';
import {Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
  const [error,setError] = useState('');
  const { createUser } = useContext(AuthContext);
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
    })
    .catch(error =>{
      console.log(error)
      setError(error.message)
    })
  }
    return (
        <div className='container mx-auto w-25 bg-info p-5 mt-4 rounded'>
            <h3 className='fw-bolder text-white'>Pleace Register:</h3>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>photo Url</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Enter photo Url" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <br />
      <Form.Text className="text-secondary">
      Already have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
    <p className='text-danger'>{error}</p>
          </div>
    
    );
};

export default Register;