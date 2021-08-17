import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Link to="/">Akash</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/portfolio">
                                <Link to="/portfolio">Portfolio</Link>
                            </Nav.Link>
                            <Nav.Link href="/about">
                                <Link to="/about">About Me</Link>
                            </Nav.Link>
                            <Nav.Link href="/contact">
                                <Link to="/contact">Conact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderMenu;