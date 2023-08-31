// components/CustomerReviews.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      comment: "Amazing service! My clothes have never looked better.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Quick and efficient. Will definitely use again.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      comment: "I'm impressed by the quality and professionalism.",
    },
  ];

  return (
    <Container className="customer-reviews">
      <h2>Customer Reviews</h2>
      <Row>
        {reviews.map((review) => (
          <Col key={review.id} md={4}>
            <Card className="review-card">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
