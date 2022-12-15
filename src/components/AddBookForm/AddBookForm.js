import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { createBook, updateBook } from "../../actions/books";

const AddBookForm = ({ selectedId, setSelectedId }) => {
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    bookImg: "",
    rating: 0,
    released: "",
  });

  const [authorName, setAuthorName] = useState("");

  const [genres, setGenres] = useState("");

  const dispatch = useDispatch();

  const book = useSelector((store) =>
    selectedId ? store.books.find((book) => book._id === selectedId) : null
  );

  useEffect(() => {
    if (book) setBookData(book);
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedId) {
      dispatch(updateBook(selectedId, bookData));
    } else {
      dispatch(createBook({ bookData, authorName, genres }));
    }

    clear();
  };

  const clear = () => {
    setSelectedId(null);

    setBookData({
      title: "",
      description: "",
      author: "",
      bookImg: "",
      rating: 0,
      released: "",
    });

    setAuthorName("");

    setGenres("");
  };

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
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
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
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
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

        <Button variant={selectedId ? "info" : "success"} type="submit">
          {selectedId ? "Edit Book" : "Add Book"}
        </Button>
        <Button variant="light" onClick={clear} className="mx-3">
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default AddBookForm;
