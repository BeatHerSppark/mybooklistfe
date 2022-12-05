import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <Container>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search for any book, author, genre etc.."
          value={searchResult}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
