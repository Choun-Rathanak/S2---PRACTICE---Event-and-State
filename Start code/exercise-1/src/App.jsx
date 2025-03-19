import React, { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
  }

  function onRainClick() {
    // Complete this code when we click on Rain Time
    setIsRaining(true);
  }


  function getTitle() {
    // This function manages the H1 text, depending on the weather
    return isRaining ? "Rain time" : "Sun time";
  }

  function getBackgroundColor() {
    // This function manages the main class value, depending on the weather
    return isRaining ? "rainy" : "sunny"; // Corrected to return appropriate class names
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
