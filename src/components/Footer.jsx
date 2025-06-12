import { Container, Row, Col } from "react-bootstrap";
import { profileData } from "../data/profile";

const Footer = () => {
  return (
    <footer className="footer-custom mt-5">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <h5 className="text-white mb-3">IAMKEPO</h5>
            <p className="text-light">
              Développeur passionné créant des solutions web et mobile innovantes.
            </p>
          </Col>
          <Col md={6}>
            <h6 className="text-white mb-3">Suivez-moi</h6>
            <div className="social-links">
              {profileData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link me-3"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="text-light mb-0">
              © 2024 IAMKEPO. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;