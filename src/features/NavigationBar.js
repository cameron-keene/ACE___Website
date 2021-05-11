import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo-min.png';

class NavigationBar extends Component{
    render(){
      return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"> <img src={logo} width="65" height="30" alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#aboutus">About us</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#deets">Tutorials</Nav.Link>
                <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link href="#join">Join</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}

export default NavigationBar;