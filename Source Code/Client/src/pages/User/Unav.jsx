import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Unav = () => {
  const navigate = useNavigate();
  const get = localStorage.getItem('user');
  const user = get ? JSON.parse(get) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
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
      to="/"
      className="fw-bold fs-4 text-dark"
    >
      🚕 Swift<span className="text-dark">Cab</span>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center gap-4">

        <Nav.Link
          as={Link}
          to="/uhome"
          className="fw-semibold text-dark nav-hover"
        >
          Home
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/cabs"
          className="fw-semibold text-dark nav-hover"
        >
          Book Cab
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/mybookings"
          className="fw-semibold text-dark nav-hover"
        >
          My Booking
        </Nav.Link>

        {/* Divider */}
        <div className="vr mx-2"></div>

        {/* User Name */}
        {user && (
          <span className="fw-semibold text-dark">
            👋 {user.name}
          </span>
        )}

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

export default Unav;