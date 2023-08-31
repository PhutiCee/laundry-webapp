// components/Footer.js
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <p>&copy; {new Date().getFullYear()} Your Laundry App. All rights reserved.</p>
    </Container>
  );
};

export default Footer;
