import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { axiosRes } from "../api/axiosDefault";  // Axios for API requests

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (currentUser) {
      axiosRes.get("/notifications/")
      .then((response) => {
        const notifications = response.data.results;
        setNotifications(notifications);

        if (Array.isArray(notifications)) {
          const unread = notifications.filter(notification => !notification.is_read).length;
          setUnreadCount(unread);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching notifications:", err);
      });
    }
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await axios.post("https://kinnect-api-cf0f665319fa.herokuapp.com/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const markAsRead = (id) => {
    axiosRes.patch(`/notifications/${id}/`, { is_read: true })
      .then(() => {
        setNotifications(prevNotifications =>
          prevNotifications.map(notification =>
            notification.id === id ? { ...notification, is_read: true } : notification
          )
        );
        setUnreadCount(prev => prev - 1);
      })
      .catch(err => console.error("Error marking notification as read:", err));
  };

  const addPostIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
      <i className="fas fa-plus"></i>Add Post
    </NavLink>
  );

  const loggedInIconsLeft = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
        <i className="fas fa-heart"></i>Liked
      </NavLink>
    </>
  );

  const loggedInIconsRight = (
    <>
      {/* Notifications Dropdown */}
      <Dropdown alignRight>
        <Dropdown.Toggle className={`${styles.NavLink} ${styles.NotificationIcon}`} variant="light" id="dropdown-basic">
          <i className="fas fa-bell"></i>
          {unreadCount > 0 && <span className={styles.UnreadBadge}>{unreadCount}</span>}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <Dropdown.Item key={notification.id} onClick={() => markAsRead(notification.id)}>
                {notification.sender_username} {notification.notification_type} your post
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item>No notifications</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

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
        <Navbar.Brand as={NavLink} to="/">Kinnect</Navbar.Brand>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIconsLeft : loggedOutIcons}
          </Nav>

          {/* Right-aligned icons */}
          <Nav className="ml-auto">
            {currentUser ? loggedInIconsRight : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
