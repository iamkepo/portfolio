import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Overlay from "./Overlay";

const Layout = ({ activeSection }) => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow-1 mt-5">
        <Container fluid className="px-0">
          <Outlet />
        </Container>
      </main>
      <Footer />
      <Overlay />
    </div>
  );
};

export default Layout;