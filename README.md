# react-hooks-redux-basics
This is How we can use React Redux.

# Installation
Run the below to install the Redux and React Redux
npm install redux react-redux --save

react-redux is to stand for connection between React and Redux.

# Basics of Redux

## Actions
Actions are the only source of information for the store as per Redux official documentation. We will import these Function into our component and can call the Function that's defined in Actions.
```
export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
```

## Reducer
Reducers are functions that take the current state and an action as arguments, and return a new state result. Can have multiple Reducer based on the requirement.
```
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
```
 If using multiple reducer then needs to import in a single file and can combine using combineReducers() 
 
 ```
 const rootReducer = combineReducers({
  changeCounterNumber, anotherReducer
});
```

## Store
The Redux store is the main, central bucket which stores all the states of an application. 

```
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

Using the below command can use Redux Dev Tools 
```
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```
# Provider in Redux
The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

```
import store from "./redux/store";

<Provider store={store}>
   <Counter />
</Provider>
```

# How to Access From the Component

import the Required Function in the Component from redux/actions
```
import { incNumber, decNumber, resetNumber } from "../../redux/actions";
```
import the required Module from react-redux to access the redux state

```
import { useSelector, useDispatch } from "react-redux";
```

## useSelector & useDispatch
useSelector and useDispatch are a set of hooks to use as alternatives to the existing connect() higher-order component
