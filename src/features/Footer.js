import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Footer = () => {
return (
    <footer className="mt-5">
<Container fluid={true}>
		<Row className="border-top justify-content-between p-3">
		<Col className="p-0" md={3}>
			<h5>Association of Software Engineers</h5>
            {/* TODO 
            Add Social Media Icons */}
            <Nav className="ml-auto">
                <Nav.Link href="#aboutus">Instagram</Nav.Link>
                <Nav.Link href="#projects">Facebook</Nav.Link>
                <Nav.Link href="#deets">Slack</Nav.Link>
            </Nav>
		</Col>
		<Col>
			<h5>Menu</h5>
            <Nav className="ml-auto">
                <Nav.Link href="#aboutus">About us</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#deets">Tutorials</Nav.Link>
                <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link href="#join">Join</Nav.Link>  
            </Nav>
		</Col>
		<Col>
			<h5>Contact Us</h5>
            <Nav className="ml-auto">
                <Nav.Link href="#aboutus">Join</Nav.Link>  
            </Nav>
		</Col>
		</Row>
	</Container>
    </footer>
);
};

export default Footer;
