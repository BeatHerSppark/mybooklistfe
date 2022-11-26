import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CarouselItem from "../../components/Carousel/CarouselItem";
import Trending from "../../components/Trending/Trending";
import LikedGenres from "../../components/LikedGenres/LikedGenres";
import RatedAllTime from "../../components/RatedAllTime/RatedAllTime";

const Home = () => {
  return (
    <Container className="text-light">
      <Row>
        <Col className="col-md-8">
          <CarouselItem />
          <LikedGenres />
        </Col>

        <Col className="col-md-4">
          <Trending />
          <RatedAllTime />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
