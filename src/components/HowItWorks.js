import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HowItWorks() {
  return (
    <div className="how-it-works">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>How It Works</h2>
            <p>Discover how our service works</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="step">
              <div className="step-icon">1</div>
              <h4>Place an Order</h4>
              <p>Select your services and schedule a pickup.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="step">
              <div className="step-icon">2</div>
              <h4>We Pick Up</h4>
              <p>Our team will pick up your items as scheduled.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="step">
              <div className="step-icon">3</div>
              <h4>Quick Delivery</h4>
              <p>We'll deliver your fresh and clean items.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
