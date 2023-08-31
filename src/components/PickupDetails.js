// components/PickupDetails.js
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const PickupDetails = () => {
  const [pickupInfo, setPickupInfo] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleInputChange = (field, value) => {
    setPickupInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  return (
    <Container className="pickup-details my-5">
      <h2>Pickup Details</h2>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={pickupInfo.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={pickupInfo.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={pickupInfo.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              value={pickupInfo.time}
              onChange={(e) => handleInputChange("time", e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pickupInfo.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
        />
      </Form.Group>
      <div className="d-grid">
        <button className="btn btn-primary mt-3 p-3" type="button">
          Proceed
        </button>
      </div>
    </Container>
  );
};

export default PickupDetails;
