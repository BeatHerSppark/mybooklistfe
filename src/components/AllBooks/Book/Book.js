import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";

import { deleteBook } from "../../../actions/books";

import "./Book.css";

const Book = ({ book, setSelectedId }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="my-3"
      style={{
        width: "25rem",
        height: "25rem",
        backgroundColor: "#212121",
        border: "1px solid #2e2e2e",
      }}
    >
      <Row>
        <Col className="col-md-10">
          <Row className="px-4 py-3">
            <Col className="col-md-12">
              <Card.Title>
                {book.title} {book.genres}
                <div style={{ opacity: "35%" }}>- {book.author}</div>
              </Card.Title>
              <Card.Subtitle style={{ opacity: "35%" }}>
                {book.released}
              </Card.Subtitle>
            </Col>
          </Row>
        </Col>
        <Col className="col-md-2">
          <Button
            variant="danger"
            onClick={() => dispatch(deleteBook(book._id))}
          >
            🗑
          </Button>
        </Col>
      </Row>

      <Row className="g-0">
        <Col className="col-md-5">
          <div
            style={{
              width: "10rem",
              height: "16rem",
            }}
          >
            <Card.Img
              src={book.bookImg}
              className="img-fluid rounded-start"
              alt="Book Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </div>
        </Col>
        <Col className="col-md-7">
          <Card.Body>
            <Card.Text style={{ maxHeight: "12rem" }} className="overflow-auto">
              {book.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Button
        variant="info"
        onClick={(e) => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          e.stopPropagation();
          setSelectedId(book._id);
        }}
      >
        Edit
      </Button>
    </Card>
  );
};

export default Book;
