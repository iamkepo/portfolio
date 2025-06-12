import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ activeSection }) => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow-1">
        <Container fluid className="px-0">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;