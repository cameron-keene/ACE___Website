import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import logo from '../imgs/logo-min.png';
import HomePage from '../pages/HomePage';
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
    render(){
      return(
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" className = "sticky-nav"> <Link className="nav-link"   to="/"> <img src={logo} width="65" height="30" alt="" /> </Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <NavItem>   <Link className="nav-link"   to="/About">About us</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/Projects">Projects</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/Tutorials">Tutorials</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/Sponsors">Sponsors</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/Join">Join</Link> </NavItem>   
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}

export default NavigationBar;