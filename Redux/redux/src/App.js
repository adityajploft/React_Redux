import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, incDec } from "./actions/index";

export function App() {
  const myState = useSelector((state) => state.changeTheNumberTigger);
  const dispatch = useDispatch();
  console.log(myState)
  return (
    <>
      <div className="App">
        <h1>Welcome to redux-app</h1>
        <button onClick={() => dispatch(incDec())}>
          <span >-</span>
        </button>
        <input name="name" type="text" value= {myState} />
        <button onClick={() => dispatch(incNum())}>
          <span>+</span>
        </button>
      </div>
    </>
  );
}

export default App;
