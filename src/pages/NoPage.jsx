import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoPage = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('404');
  }, [setActiveSection]);

  return (
    <div className="error-page">
      <Container className="py-5">
        <Row className="min-vh-100 align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <div className="error-content">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">Page non trouvée</h2>
              <p className="error-description lead">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
              <div className="error-actions mt-4">
                <Button 
                  as={Link} 
                  to="/" 
                  variant="primary" 
                  size="lg" 
                  className="me-3"
                >
                  <i className="fas fa-home me-2"></i>
                  Retour à l'accueil
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-primary" 
                  size="lg"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Me contacter
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NoPage;