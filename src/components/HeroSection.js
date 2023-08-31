// components/HeroSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../services");
  };

  return (
    <div className="hero-section">
      <Container>
        <Row style={{ minHeight: "300px" }}>
          <Col>
            <h1>Welcome to Your Laundry App</h1>
            <p>Effortless Laundry Services at Your Doorstep</p>
            <Button variant="btn btn-success mt-5 p-3" onClick={handleClick}>View Our Services</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
