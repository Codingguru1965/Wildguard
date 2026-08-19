import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
            <Container>
                {/* Purana code: <span style={{ color: '#ff9800', marginRight: '5px' }}>🌿 Habitat</span> */}
                <Navbar.Brand href="#home" className="text-white fw-bold fs-4 d-flex align-items-center">
                    <span style={{ color: '#ff9800', marginRight: '5px' }}>🌿 WildGuard</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {/* Smooth Scroll Links */}
                        <Nav.Link as={Link} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="impact" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Impact</Nav.Link>
                        <Nav.Link as={Link} to="take-action" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Take Action</Nav.Link>
                    </Nav>
                    <button className="btn-custom">DONATE NOW</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;