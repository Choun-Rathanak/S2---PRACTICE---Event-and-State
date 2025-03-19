import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState(""); 
  const [b, setB] = useState(""); 
  const [result, setResult] = useState(""); 
  const [error, setError] = useState(false); 
  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value); 
  }

  function onB(event) {
    setB(event.target.value); 
  }

  function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== ""; 
  }

  function handleCompute() {
    if (!isValidNumber(a) || !isValidNumber(b)) {
      setError(true); 
      setResult("Please enter valid numbers!"); 
    } else {
      setError(false); 
      setResult(parseFloat(a) + parseFloat(b)); 
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} /> 

      <label>B =</label>
      <input onKeyUp={onB} /> 

      <label>A + B =</label>
      <input
        value={result}
        disabled
        style={{ color: error ? "red" : "black" }} 
      />

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
