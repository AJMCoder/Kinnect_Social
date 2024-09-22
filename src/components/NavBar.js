import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Container>
            <div>
                <Navbar className={styles.NavBar} bg="dark" expand='md' fixed="top" variant="dark">
                    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/"><i className="fas fa-home"></i>Home</Nav.Link>
                            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
                            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/register"><i className="fas fa-user-plus"></i>Register</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Container>
    );
}

export default NavBar;