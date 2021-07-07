import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
return (
    <footer className="mt-5" bg="dark">
<Container fluid={true}>
		<Row className="border-top justify-content-between p-3">
		<Col className="p-0" md={3}>
			<h5>Association of Software Engineers</h5>
            {/* TODO 
            Add Social Media Icons */}
            <Nav className="ml-auto" bg="dark">
                <Nav.Link href="#aboutus">Instagram</Nav.Link>
                <Nav.Link href="#projects">Facebook</Nav.Link>
                <Nav.Link href="#deets">Slack</Nav.Link>
            </Nav>
		</Col>
		<Col>
			<h5>Menu</h5>
            <Nav className="ml-auto">
                <NavItem>   <Link className="nav-link"   to="/ACE_Website/About">About us</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/ACE_Website/Learn">Learn</Link> </NavItem> 
                <NavItem>   <Link className="nav-link"   to="/ACE_Website/Contact">Contact</Link> </NavItem>    
                <NavItem>   <Link className="nav-link"   to="/ACE_Website/Admin">Admin</Link> </NavItem>    
            </Nav>
		</Col>
		</Row>
	</Container>
    </footer>
);
};

export default Footer;
