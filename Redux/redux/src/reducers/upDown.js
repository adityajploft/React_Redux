// create a reducer
const initialstate = 10;

const changeTheNumberTigger = (state = initialstate, action) => {
  switch (action.type) {
    case "InCrement":
      return state + 1;

    case "DeCrement":
      return state - 1;

    default:
      return state;
  }
};

export default changeTheNumberTigger
