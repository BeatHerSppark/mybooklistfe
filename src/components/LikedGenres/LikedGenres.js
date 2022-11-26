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
                maxHeight: "16rem",
              }}
            >
              <div
                style={{
                  width: "16rem",
                  height: "16rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "8rem",
                    height: "8rem",
                    marginTop: "2.5rem",
                    marginBottom: "1rem",
                  }}
                  src="https://i.imgur.com/iBud6UZ.png"
                />
                <h4>Horror</h4>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LikedGenres;
