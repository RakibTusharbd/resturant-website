import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {  Button,  Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import pure from '../../../src/assets/pure.png'

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
  }
    return (
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <img style={{width:'60px'}} src={pure} alt="" />
        <Navbar.Brand href="#home">Livefly Crowns</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'40px'}}></FaUserCircle></Nav.Link>}
            <Nav.Link eventKey={2} href="#memes">
              {
                user ? 
                
                <Button onClick={handleLogOut} variant="dark">LogOut</Button>:
                <Link to="/login">
                  <Button  variant="primary">Login</Button>
                </Link>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;