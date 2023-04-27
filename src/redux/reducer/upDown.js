// This is One Reducer that's based on Action When user change UI then Action will
//  be called and action will perform on the based on reducer
// Can Make Multiple Reducer based on the Functionality and can join in Index.js File.

const initialState = 0;

const changeCounterNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default changeCounterNumber;
