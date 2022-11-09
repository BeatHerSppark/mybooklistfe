import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Book = ({ book }) => {
  return (
    <Card className="my-3 bg-dark" style={{ width: "25rem" }}>
      <Row className="g-0">
        <Col className="col-md-4">
          <Card.Img
            src={book.bookImg}
            className="img-fluid rounded-start"
            alt="Book Image"
          />
        </Col>
        <Col className="col-md-8">
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text style={{ maxHeight: "5rem" }} className="overflow-auto">
              {book.description}
            </Card.Text>
            <Button variant="dark">See more</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Book;
