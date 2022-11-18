import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CarouselItem = () => {
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
    <Container>
      <h3>This Month:</h3>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {itemArr.map((el) => (
          <Carousel.Item key={el}>
            <Row className="g-0 justify-content-md-center">
              {el.map((book) => (
                <Col
                  key={book._id}
                  className="mx-3"
                  style={{ maxWidth: "9rem" }}
                >
                  <Card
                    className="my-3"
                    style={{
                      backgroundColor: "#212121",
                      border: "1px solid #2e2e2e",
                      maxWidth: "9rem",
                    }}
                  >
                    <Card.Img
                      src={book.bookImg}
                      className="img-fluid rounded-start"
                      alt="Book Image"
                      style={{ maxWidth: "9rem", maxHeight: "12rem" }}
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

export default CarouselItem;
