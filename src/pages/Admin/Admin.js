import React from "react";
import Container from "react-bootstrap/Container";

import AddBookForm from "../../components/AddBookForm/AddBookForm";
import AllBooks from "../../components/AllBooks/AllBooks";

const Admin = () => {
  return (
    <Container className="text-light https://makeheadway.com">
      <AddBookForm />
      <AllBooks />
    </Container>
  );
};

export default Admin;
