import './index.css'

const Counter = () => (
    <div className="main-container">
        <h1>Increment/Decrement Counter</h1>
        <p>using React and Redux</p>
        <div className="increase-decrease-button-container">
            <button type="button">-</button>
            <h2>0</h2>
            <button type="button">+</button>
        </div>
    </div>
)

export default Counter