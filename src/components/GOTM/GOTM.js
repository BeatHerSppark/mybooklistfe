import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const GOTM = () => {
  const [index, setIndex] = useState(0);

  const books = useSelector((store) => store.books);

  const arrToMatrix = (arr, elsPerSubArray) => {
    let matrix = [];

    for (let i = 0, k = -1; i < arr.length; i++) {
      if (i % elsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(arr[i]);
    }

    return matrix;
  };

  const itemArr = arrToMatrix(books, 5);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="mt-3">
      <h3>
        Genre of the month - <span style={{ color: "#e07575" }}>Romance!</span>
      </h3>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {itemArr.map((el) => (
          <Carousel.Item key={el}>
            <Row className="g-0 justify-content-md-center">
              {el.map((book) => (
                <Col key={book._id} style={{ width: "9rem" }}>
                  <Card
                    className="my-3"
                    style={{
                      backgroundColor: "#212121",
                      border: "1px solid #2e2e2e",
                      width: "9rem",
                      height: "14rem",
                    }}
                  >
                    <Card.Img
                      src={book.bookImg}
                      className="rounded-start"
                      alt="Book Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        overflow: "hidden",
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default GOTM;
