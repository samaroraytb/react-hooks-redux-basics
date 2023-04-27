import "./index.css";

const Counter = () => (
  <div class="container">
    <h1>Counter App using React Redux</h1>
    <div class="counter">
      <button id="increment-btn">-</button>
      <div id="counter-value">0</div>
      <button id="decrement-btn">+</button>
    </div>
    <button id="reset">Reset</button>
  </div>
);

export default Counter;
