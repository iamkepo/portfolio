import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    setActiveSection('contact');
  }, [setActiveSection]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    for (const key in formData) {
      if (formData[key] === "") {
        setAlertType("danger");
        setAlertMessage(`Le champ ${key} est requis`);
        setShowAlert(true);
        return;
      }
    }

    try {
      await axios({
        method: "post",
        url: 'https://zappe.herokuapp.com/api/public/stock/post',
        data: {
          data: formData,
          table: "messages"
        }
      });

      setFormData({ nom: "", email: "", message: "" });
      setAlertType("success");
      setAlertMessage("Votre message a été envoyé avec succès !");
      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setAlertType("danger");
      setAlertMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
      setShowAlert(true);
    }

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="page-title">Me Contacter</h1>
            <p className="page-subtitle lead">
              Discutons de votre projet ensemble
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="contact-card shadow-lg">
              <Card.Body className="p-5">
                {showAlert && (
                  <Alert variant={alertType} dismissible onClose={() => setShowAlert(false)}>
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Votre nom *</Form.Label>
                        <Form.Control
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Entrez votre nom complet"
                          size="lg"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Votre email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          size="lg"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Votre message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou posez votre question..."
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="contact-submit-btn"
                    >
                      <i className="fas fa-paper-plane me-2"></i>
                      Envoyer le message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Info & Social Links */}
        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <Row>
              <Col md={6} className="mb-4">
                <Card className="contact-info-card h-100 shadow">
                  <Card.Body className="text-center p-4">
                    <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                    <h5>Email Direct</h5>
                    <p className="text-muted">
                      Pour une réponse rapide, vous pouvez aussi m'écrire directement
                    </p>
                    <Button
                      href="mailto:christamour.kakpo@gmail.com"
                      variant="outline-primary"
                    >
                      christamour.kakpo@gmail.com
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="contact-info-card h-100 shadow">
                  <Card.Body className="text-center p-4">
                    <i className="fab fa-whatsapp fa-3x text-success mb-3"></i>
                    <h5>WhatsApp</h5>
                    <p className="text-muted">
                      Contactez-moi directement sur WhatsApp pour une discussion rapide
                    </p>
                    <Button
                      href="https://wa.me/22996772269"
                      target="_blank"
                      variant="outline-success"
                    >
                      +229 96 77 22 69
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;