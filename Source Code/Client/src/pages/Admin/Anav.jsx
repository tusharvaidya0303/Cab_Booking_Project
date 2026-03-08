import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Anav = () => {
  const navigate = useNavigate();

  // Logout Function (FIXED)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // redirect to login
  };

  return (
    <Navbar
      expand="lg"
      className="bg-warning shadow-sm py-3"
      sticky="top"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/ahome"
          className="fw-bold fs-4 text-dark"
        >
          🚕 Swift<span className="fw-light">Cab</span> Admin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            
            <Nav.Link
              as={Link}
              to="/ahome"
              className="fw-semibold text-dark nav-hover"
            >
              Dashboard
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/users"
              className="fw-semibold text-dark nav-hover"
            >
              Users
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/acabs"
              className="fw-semibold text-dark nav-hover"
            >
              Cabs
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/addcab"
              className="fw-semibold text-dark nav-hover"
            >
              Add Cab
            </Nav.Link>

            <div className="vr mx-2"></div>

            {/* Admin Badge */}
            <span className="fw-semibold text-dark">
              👑 Admin
            </span>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-dark rounded-pill px-4 fw-semibold shadow-sm"
            >
              Logout
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anav;
