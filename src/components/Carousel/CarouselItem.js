import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CarouselItem = () => {
  const [index, setIndex] = useState(0);

  const itemArr = [1, 2, 3, 4];
  const colArr = [1, 2, 3, 4, 5];

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
              {colArr.map((el) => (
                <Col key={el} className="mx-3" style={{ maxWidth: "10rem" }}>
                  <Card
                    className="my-3"
                    style={{
                      backgroundColor: "#212121",
                      border: "1px solid #2e2e2e",
                    }}
                  >
                    <Card.Img
                      src="https://i.imgur.com/8XONlRT.jpg"
                      className="img-fluid rounded-start"
                      alt="Book Image"
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
