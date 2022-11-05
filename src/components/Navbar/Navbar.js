import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <Container className="text-light">
      <Row className="text-center">
        <Col className="fs-1 fw-bold">MyBookList</Col>
      </Row>
      <Row className="py-2">
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Books</Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Authors</Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Genres</Col>
        <Col className="fw-bold col-7">
          <InputGroup className="">
            <Form.Control
              placeholder="Search books, authors, genres..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Login</Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Sign up</Col>
      </Row>
    </Container>
  );
};

export default Navbar;
