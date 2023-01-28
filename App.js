import "./App.css";
import { useState } from "react";
import { useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1000000);

const multiCount = useMemo(()=>{
  console.log("multiCount")
  return count+5

},[count])

  return (
    <div className="App">
      <>
        <h1>UseMemo Hook in React </h1>
        <h1>Count: {count}</h1>
        <h1>Item: {item}</h1>
        <h1>{multiCount}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setItem(item + 1)}>Click me</button>
      </>
    </div>
  );
}

export default App;
