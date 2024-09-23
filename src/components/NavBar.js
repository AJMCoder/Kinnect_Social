import React from "react";
import styles from '../styles/NavBar.module.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {
    const currentUser = useCurrentUser();

    const addPostIcon = (
        <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/posts/create"><i className="fas fa-plus"></i>Add Post</Nav.Link>
    )
    const loggedInIcons = (
        <>
            <Nav.Link className={styles.NavLink} activeClassName={styles.Active} to="/feed"><i className="fas fa-stream"></i>Feed</Nav.Link>
            <Nav.Link className={styles.NavLink} activeClassName={styles.Active} to="/liked"><i className="fas fa-heart"></i>Liked</Nav.Link>
            <Nav.Link className={styles.NavLink} to="/" onClick={() => {}} ><i className="fas fa-sign-out-alt"></i>Sign Out</Nav.Link>
            <Nav.Link className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}><Avatar src={currentUser?.profile_image} text="Profile" height={40} /> </Nav.Link>
        </>
    );
    
        const loggedOutIcons = (
        <>
            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/register"><i className="fas fa-user-plus"></i>Register</Nav.Link>
        </>
    );

    return (
        <Container>
            <div>
                <Navbar className={styles.NavBar} bg="dark" expand='md' fixed="top" variant="dark">
                    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                    {currentUser && addPostIcon}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} className={styles.NavLink} activeClassName={styles.Active} to="/"><i className="fas fa-home"></i>Home</Nav.Link>
                            {currentUser ? loggedInIcons : loggedOutIcons}
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