import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post("https://kinnect-api-cf0f665319fa.herokuapp.com/dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
            <i className="fas fa-plus"></i>Add Post
        </NavLink>
    );

    const loggedInIcons = (
        <>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
                <i className="fas fa-stream"></i>Feed
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
                <i className="fas fa-heart"></i>Liked
            </NavLink>
            <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                <i className="fas fa-sign-out-alt"></i>Sign Out
            </NavLink>
            <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>
    );

    const loggedOutIcons = (
        <>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
                <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/register">
                <i className="fas fa-user-plus"></i>Register
            </NavLink>
        </>
    );

    return (
        <Container>
            <Navbar expanded={expanded} className={styles.NavBar} bg="dark" expand="md" fixed="top" variant="dark">
                <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                {currentUser && addPostIcon}
                <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/">
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;