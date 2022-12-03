export default (bookState = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...bookState, action.payload];
    case "UPDATE":
      return bookState.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
    case "DELETE":
      return bookState.filter((book) => book._id !== action.payload);

    default:
      return bookState;
  }
};
