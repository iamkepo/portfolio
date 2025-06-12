import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ activeSection }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <BootstrapNavbar expand="lg" className="navbar-custom shadow-sm" fixed="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-text">I AM</span>
          <span className="brand-accent">KEPO</span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'nav-link-active' : ''}
            >
              Accueil
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experiences/0/0" 
              className={isActive('experiences') ? 'nav-link-active' : ''}
            >
              Expériences
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={isActive('services') ? 'nav-link-active' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('contact') ? 'nav-link-active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;