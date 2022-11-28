import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const TrendingGenres = () => {
  let tempArr = [1, 2, 3, 4];

  return (
    <Container>
      <h3>Trending Genres:</h3>
      <Row className="g-0 row-cols-1 row-cols-md-2">
        {tempArr.map((el) => (
          <Col key={el}>
            <Card
              className="my-1"
              style={{
                width: "11.8rem",
                backgroundColor: "#212121",
                border: "1px solid #2e2e2e",
                margin: "0.4rem",
              }}
            >
              <div style={{ width: "11.8rem", height: "6rem" }}></div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingGenres;
