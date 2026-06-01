import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //const [count2, setCount2] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  function decrement()
  {
    setCount(count-1);
  }
  
  return (
  <div className="main">
    <h1>Increment and decrement Counter:</h1>
      <div className="container">
        <button onClick={handleClick} id="but">+</button>
        <button id="but2">{count}</button>
        <button onClick={decrement} id="but">-</button>
      </div>

    <h3>Final count {count}</h3>
  </div>
  );
}
export default App;