import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Experiences = ({ setActiveSection, experiences }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const params = useParams();

  useEffect(() => {
    setActiveSection('experiences');
    if (experiences && params.group !== undefined && params.item !== undefined) {
      const groupIndex = parseInt(params.group);
      const itemIndex = parseInt(params.item);
      if (experiences[groupIndex] && experiences[groupIndex].projets[itemIndex]) {
        setCurrentProject(experiences[groupIndex].projets[itemIndex]);
      }
    }
  }, [setActiveSection, experiences, params]);

  const getNavigationUrls = () => {
    const group = parseInt(params.group);
    const item = parseInt(params.item);
    
    let prevUrl = null;
    let nextUrl = null;

    if (item > 0) {
      prevUrl = `/experiences/${group}/${item - 1}`;
    } else if (group > 0) {
      const prevGroupLength = experiences[group - 1].projets.length;
      prevUrl = `/experiences/${group - 1}/${prevGroupLength - 1}`;
    }

    if (item < experiences[group].projets.length - 1) {
      nextUrl = `/experiences/${group}/${item + 1}`;
    } else if (group < experiences.length - 1) {
      nextUrl = `/experiences/${group + 1}/0`;
    }

    return { prevUrl, nextUrl };
  };

  const { prevUrl, nextUrl } = getNavigationUrls();

  if (!experiences || !currentProject) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="experiences-page">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h1 className="page-title">Mes Expériences Professionnelles</h1>
            <p className="page-subtitle">
              Découvrez mes projets et réalisations
            </p>
          </Col>
        </Row>

        {/* Categories Navigation */}
        <Row className="mb-5">
          <Col lg={12}>
            <Nav variant="pills" className="justify-content-center category-nav">
              {experiences.map((category, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    as={Link}
                    to={`/experiences/${index}/0`}
                    active={index === parseInt(params.group)}
                    className="category-pill"
                  >
                    {category.title}
                    <Badge bg="light" text="dark" className="ms-2">
                      {category.projets.length}
                    </Badge>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Current Project */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="project-card shadow-lg">
              <Row className="g-0">
                <Col md={6}>
                  <div className="project-image-container">
                    <img
                      src={currentProject.img}
                      alt={currentProject.name}
                      className="project-image"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Body className="p-4">
                    <div className="project-header mb-3">
                      <h3 className="project-title">{currentProject.name}</h3>
                      <Badge bg="primary" className="project-date">
                        {currentProject.date}
                      </Badge>
                    </div>
                    
                    <p className="project-description mb-4">
                      {currentProject.description}
                    </p>

                    {currentProject.technologies && (
                      <div className="project-technologies mb-4">
                        <h6 className="mb-2">Technologies utilisées :</h6>
                        <div className="tech-badges">
                          {currentProject.technologies.map((tech, index) => (
                            <Badge key={index} bg="secondary" className="me-2 mb-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentProject.link && (
                      <Button
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="project-link-btn"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Voir le projet
                      </Button>
                    )}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Navigation */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <div className="d-flex justify-content-between align-items-center project-navigation">
              {prevUrl ? (
                <Button as={Link} to={prevUrl} variant="outline-primary">
                  <i className="fas fa-arrow-left me-2"></i>
                  Précédent
                </Button>
              ) : (
                <div></div>
              )}
              
              <div className="project-counter">
                <span className="current-project">
                  {parseInt(params.item) + 1}
                </span>
                <span className="separator"> / </span>
                <span className="total-projects">
                  {experiences[parseInt(params.group)].projets.length}
                </span>
              </div>

              {nextUrl ? (
                <Button as={Link} to={nextUrl} variant="outline-primary">
                  Suivant
                  <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
        </Row>

        {/* Projects List */}
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="projects-list-card shadow">
              <Card.Header>
                <h5 className="mb-0">
                  {experiences[parseInt(params.group)].title}
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {experiences[parseInt(params.group)].projets.map((project, index) => (
                    <Col md={6} lg={4} key={index} className="mb-3">
                      <Card 
                        className={`project-mini-card ${index === parseInt(params.item) ? 'active' : ''}`}
                        as={Link}
                        to={`/experiences/${params.group}/${index}`}
                      >
                        <Card.Body className="text-center p-3">
                          <h6 className="project-mini-title">{project.name}</h6>
                          <small className="text-muted">{project.date}</small>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experiences;