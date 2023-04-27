import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, resetNumber } from "../../redux/actions";
import "./index.css";

const Counter = () => {
  const counterNumber = useSelector((reducer) => reducer.changeCounterNumber);
  const dispatchFn = useDispatch();

  return (
    <div className="container">
      <h1>Counter App using React Redux</h1>
      <div className="counter">
        <button onClick={() => dispatchFn(decNumber())} id="increment-btn">
          -
        </button>
        <div id="counter-value">{counterNumber}</div>
        <button onClick={() => dispatchFn(incNumber())} id="decrement-btn">
          +
        </button>
      </div>
      <button id="reset" onClick={() => dispatchFn(resetNumber())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
