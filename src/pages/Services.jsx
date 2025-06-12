import { useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge, ListGroup } from "react-bootstrap";
import { servicesData } from "../data/services";

const Services = ({ setActiveSection }) => {
  useEffect(() => {
    setActiveSection('services');
  }, [setActiveSection]);

  const handleContact = (service) => {
    const message = `Bonjour, je suis intéressé par le forfait ${service.title}. Pouvez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/22996772269?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="services-page">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="page-title">Mes Services</h1>
            <p className="page-subtitle lead">
              Des solutions sur mesure pour tous vos besoins de développement
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col lg={6} xl={3} key={index}>
              <Card 
                className={`service-card h-100 shadow-lg ${service.popular ? 'popular-service' : ''}`}
              >
                {service.popular && (
                  <div className="popular-badge">
                    <Badge bg="warning" text="dark">
                      <i className="fas fa-star me-1"></i>
                      Populaire
                    </Badge>
                  </div>
                )}
                
                <Card.Header className={`service-header bg-${service.color} text-white text-center`}>
                  <h4 className="service-title mb-0">{service.title}</h4>
                </Card.Header>

                <Card.Body className="d-flex flex-column">
                  <div className="service-price text-center mb-4">
                    <span className="price-amount">{service.price}</span>
                    <span className="price-currency">{service.currency}</span>
                  </div>

                  <ListGroup variant="flush" className="service-features mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <ListGroup.Item key={featureIndex} className="border-0 px-0">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  <p className="service-description text-muted mb-4">
                    {service.description}
                  </p>

                  <Button
                    variant={service.popular ? 'warning' : service.color}
                    size="lg"
                    className="mt-auto service-btn"
                    onClick={() => handleContact(service)}
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    Choisir ce forfait
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Info Section */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <Card className="info-card shadow">
              <Card.Body className="text-center p-5">
                <h3 className="mb-4">Pourquoi choisir mes services ?</h3>
                <Row>
                  <Col md={4} className="mb-4">
                    <div className="info-item">
                      <i className="fas fa-code fa-3x text-primary mb-3"></i>
                      <h5>Code de qualité</h5>
                      <p className="text-muted">
                        Code propre, optimisé et maintenable suivant les meilleures pratiques
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="info-item">
                      <i className="fas fa-mobile-alt fa-3x text-success mb-3"></i>
                      <h5>Design responsive</h5>
                      <p className="text-muted">
                        Applications parfaitement adaptées à tous les appareils
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="info-item">
                      <i className="fas fa-headset fa-3x text-info mb-3"></i>
                      <h5>Support continu</h5>
                      <p className="text-muted">
                        Accompagnement et support technique après livraison
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;