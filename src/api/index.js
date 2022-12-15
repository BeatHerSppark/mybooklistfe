import axios from "axios";

const url = "http://localhost:5000/books";

export const fetchBooks = () => axios.get(url);

export const createBook = ({ bookData, authorName, genres }) =>
  axios.post(url, { bookData, authorName, genres });

export const updateBook = (id, book) => axios.patch(`${url}/${id}`, book);

export const deleteBook = (id) => axios.delete(`${url}/${id}`);
