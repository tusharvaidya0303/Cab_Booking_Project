import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-amber-400 ${scrolled ? "shadow-lg" : "" }`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark ">
          Cab Booking App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
  <Nav className="gap-2">

    {/* User Login */}
    <Nav.Link
      as={Link}
      to="/login"
      className="btn btn-dark rounded-pill px-4 fw-bold text-dark shadow-sm hover:bg-dark-800 text-white hover:scale-105 transition-all duration-300"
      
    >
      User Login
    </Nav.Link>

    {/* Admin Login */}
    <Nav.Link
      as={Link}
      to="/alogin"
      className="btn btn-dark rounded-pill px-4 fw-bold text-dark shadow-sm hover:bg-dark-800 text-white hover:scale-105 transition-all duration-300"
    >
      Admin Login
    </Nav.Link>

  </Nav>
</Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;