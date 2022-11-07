import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBookForm = () => {
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    author: "",
    genres: "",
    bookImg: "",
    rating: 0,
    released: "",
  });
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter book's title" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter book's author" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter book's description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Genres</Form.Label>
          <Form.Control type="text" placeholder="Enter book's genres" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" accept="image/png, image/jpeg" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" min="1" max="10" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="released">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddBookForm;
