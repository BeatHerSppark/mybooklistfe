import React from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Book from "./Book/Book";

const AllBooks = () => {
  const books = useSelector((store) => store.books);

  console.log(books);

  return (
    <Container>
      <h3>Search book:</h3>
      <Row className="row-cols-3">
        {books.map((book) => (
          <Col key={book._id} className="col-12 col-sm-6 col-md-4">
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllBooks;
