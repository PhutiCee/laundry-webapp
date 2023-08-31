// components/ContactInformation.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactInformation = () => {
  return (
    <Container className="contact-information">
      <h2>Contact Information</h2>
      <Row>
        <Col md={12}>
          <div className="contact-info">
            <p>Email: info@yourlaundryapp.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Laundry Street, Polokwane, South Africa</p>
          </div>
        </Col>
        {/* <Col md={6}>
          <h1>Laundry App</h1>
        </Col> */}
      </Row>
    </Container>
  );
};

export default ContactInformation;
