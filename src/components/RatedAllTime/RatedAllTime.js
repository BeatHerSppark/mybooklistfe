import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const RatedAllTime = () => {
  let tempArr = [1, 2, 3, 4, 5];
  return (
    <Container>
      <h3>Top Rated All Time: </h3>

      {tempArr.map((el) => (
        <Card
          key={el}
          className="my-3 card-bg-dark"
          style={{
            backgroundColor: "#212121",
            border: "1px solid #2e2e2e",
          }}
        >
          <Row className="g-0">
            <Col className="col-md-2">
              <Card.Img
                src="https://i.imgur.com/8XONlRT.jpg"
                className="img-fluid rounded-start"
                alt="Book Image"
                style={{ maxWidth: "5rem" }}
              />
            </Col>
            <Col className="col-md-10">
              <Card.Body>
                <Card.Title>Dazebook</Card.Title>
                <Card.Text
                  style={{ maxHeight: "5rem" }}
                  className="overflow-auto"
                >
                  Cool Bok
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default RatedAllTime;
