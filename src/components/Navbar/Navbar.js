import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Container className="text-light mb-4">
      <Row className="text-center">
        <Col className="fs-1 fw-bold">
          <Link to="/" className="link-unstyled">
            MyBookList
          </Link>
        </Col>
      </Row>
      <Row className="py-2">
        <Col className="fs-5 fw-bold col-1 text-center my-auto">
          <Link to="/" className="link-unstyled">
            Books
          </Link>
        </Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">
          <Link to="/" className="link-unstyled">
            Authors
          </Link>
        </Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">
          <Link to="/" className="link-unstyled">
            Genres
          </Link>
        </Col>
        <Col className="fw-bold col-6">
          <InputGroup className="">
            <Form.Control
              placeholder="Search books, authors, genres..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              className="shadow-none"
            />
            <Button variant="outline-light" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">
          <Link to="/admin" className="link-unstyled">
            Admin
          </Link>
        </Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Login</Col>
        <Col className="fs-5 fw-bold col-1 text-center my-auto">Sign up</Col>
      </Row>
    </Container>
  );
};

export default Navbar;
