import React from "react";
import Container from "react-bootstrap/Container";

import AddBookForm from "../../components/AddBookForm/AddBookForm";

const Admin = () => {
  return (
    <Container className="text-light">
      <AddBookForm />
    </Container>
  );
};

export default Admin;
