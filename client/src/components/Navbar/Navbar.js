import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoginSignupModal from "../LoginSignUpModal/LoginSignUpModal";
import "./Navbar.css";
import Auth from "../../utils/auth";

// Function to make navbar responsive
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Navbar variant="dark" className="py-3 nav-container" expand="lg">
      <LoginSignupModal
        show={show}
        handleClose={handleClose}
      ></LoginSignupModal>
      <Container>
        <Navbar.Brand href="/" className="logo">
          <h1>Devbids</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/contracts" className="nav-text">
              Contracts
            </Link>
            <Link to="/contactUs" className="nav-text">
              Contact Us
            </Link>

            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to="/profile" className="nav-text">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={Auth.logout} className="nav-text">
                  Logout
                </Nav.Link>
                <Nav.Link disabled className="welcome-text">
                  Welcome {Auth.getProfile().data.username || ''}!
                </Nav.Link>
              </>
            ) : (
              <Button onClick={handleShow}>Login or Sign Up</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
