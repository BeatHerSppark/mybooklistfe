import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState("");

  return (
    <Container>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search for any book, author, genre etc.."
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
