import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { createBook } from "../../actions/books";

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    author: "",
    genres: "",
    bookImg: "",
    rating: 0,
    released: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBook(bookData));
  };

  const clear = () => {};

  return (
    <Container className="mb-4">
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book's title"
                value={bookData.title}
                onChange={(e) =>
                  setBookData({ ...bookData, title: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book's author"
                value={bookData.author}
                onChange={(e) =>
                  setBookData({ ...bookData, author: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter book's description"
            value={bookData.description}
            onChange={(e) =>
              setBookData({ ...bookData, description: e.target.value })
            }
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Genres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book's genres"
                value={bookData.genres}
                onChange={(e) =>
                  setBookData({ ...bookData, genres: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="released">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) =>
                  setBookData({
                    ...bookData,
                    released: e.target.valueAsDate.toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }),
                  })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="10"
                value={bookData.rating}
                onChange={(e) =>
                  setBookData({ ...bookData, rating: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setBookData({ ...bookData, bookImg: base64 })
            }
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Add Book
        </Button>
        <Button variant="light" onClick={clear} className="mx-3">
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default AddBookForm;
