import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Container>
            <div>
                <Navbar className={styles.NavBar} bg="dark" expand='md' fixed="top" variant="dark">
                    <NavLink to="/">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/"><i className="fas fa-home"></i>Home</NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</NavLink>
                            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/register"><i className="fas fa-user-plus"></i>Register</NavLink>
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