export default (bookState = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...bookState, action.payload];

    default:
      return bookState;
  }
};
