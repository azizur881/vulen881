import React from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logos/Group 1329.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="heading">
          
<div className="container" >
<Navbar  expand="lg">
  <Navbar.Brand href="/home"> <img style={{width:"202",height:"60px"}} src={logo} alt=""/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-item">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home">Events</Nav.Link>
      <Nav.Link href="#link">Blogs</Nav.Link>
     <Link to="/login"> <Button style={{margin:'10px' , padding:"5px 18px"}} >Register</Button></Link>
     <Link to ="/admin"> <Button style={{margin:'10px', padding:"5px 18px",backgroundColor:'rgba(67, 65, 65, 1)'}}>Admin</Button> </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>
        </div>
    );
};

export default Header;