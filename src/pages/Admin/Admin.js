import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import AddBookForm from "../../components/AddBookForm/AddBookForm";
import AllBooks from "../../components/AllBooks/AllBooks";

const Admin = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container className="text-light">
      <AddBookForm selectedId={selectedId} setSelectedId={setSelectedId} />
      <AllBooks setSelectedId={setSelectedId} />
    </Container>
  );
};

export default Admin;
