import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Book = () => {
  return (
    <Card className="my-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image"
      />
      <Card.Body className="bg-dark">
        <Card.Title>Book</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">See more</Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
