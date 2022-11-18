import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const LikedGenres = () => {
  let tempArr = [1, 2, 3, 4, 5];

  return (
    <Container className="mt-3">
      <h3>Genres You Like:</h3>
      <Row className="g-0 row-cols-1 row-cols-md-3">
        {tempArr.map((el) => (
          <Col key={el} style={{ maxWidth: "20rem" }}>
            <Card
              className="my-3"
              style={{
                backgroundColor: "#212121",
                border: "1px solid #2e2e2e",
                maxWidth: "16rem",
              }}
            >
              <Card.Img src="https://tmsvalue.co.uk/wp-content/uploads/2017/03/Square-500x500-mid-grey.png" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LikedGenres;
