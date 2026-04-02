import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
      document.getElementById("message").innerText = "You clicked the button!";
    });

  
    return () => {
      button.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button id="btn">Click Me</button>
      <p id="message"></p>
    </div>
  );
}

export default App;