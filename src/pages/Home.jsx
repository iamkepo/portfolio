import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ProgressBar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { profileData } from "../data/profile";

const Home = ({ setActiveSection }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const elem = document.body;

  useEffect(() => {
    setActiveSection('home');
  }, [setActiveSection]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % profileData.photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <div className="hero-content">
                <h1 className="hero-title">
                  Bonjour, je suis <br />
                  <span className="text-gradient">Christ-Amour</span>
                </h1>
                <h2 className="hero-subtitle">Développeur Full Stack</h2>
                <p className="hero-description lead">
                  {profileData.description}
                </p>
                <div className="hero-buttons mt-4">
                  <Button 
                    as={Link} 
                    to="/experiences/0/0" 
                    variant="primary" 
                    size="lg" 
                    className="me-3 mb-2"
                    onClick={openFullscreen}
                  >
                    Voir mes projets
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-primary" 
                    size="lg"
                    className="mb-2"
                  >
                    Me contacter
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <Image
                    src={profileData.photos[currentPhoto]}
                    alt="Christ-Amour Kakpo"
                    className="hero-image"
                    fluid
                  />
                </div>
                <div className="photo-indicators mt-3">
                  {profileData.photos.map((_, index) => (
                    <button
                      key={index}
                      className={`photo-indicator ${index === currentPhoto ? 'active' : ''}`}
                      onClick={() => setCurrentPhoto(index)}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="skills-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Mes Compétences</h2>
              <p className="section-subtitle">
                Technologies et frameworks que je maîtrise
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="skills-card shadow-lg">
                <Card.Body className="p-4">
                  <Row>
                    {profileData.competences.map((skill, index) => (
                      <Col md={6} key={index} className="mb-4">
                        <div className="skill-item">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.progress}%</span>
                          </div>
                          <ProgressBar 
                            now={skill.progress} 
                            className="skill-progress"
                            variant={skill.progress >= 90 ? 'success' : skill.progress >= 70 ? 'info' : 'warning'}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Card className="cta-card shadow-lg">
                <Card.Body className="p-5">
                  <h3 className="cta-title mb-3">Prêt à démarrer votre projet ?</h3>
                  <p className="cta-description mb-4">
                    Discutons de vos besoins et créons ensemble quelque chose d'extraordinaire.
                  </p>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="primary" 
                    size="lg"
                    className="cta-button"
                    onClick={openFullscreen}
                  >
                    Commencer maintenant
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;