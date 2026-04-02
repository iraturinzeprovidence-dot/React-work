import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  const addition = number1 + number2;
  const subtraction = number1 - number2;
  const multiplication = number1 * number2;
  const division = number2 !== 0 ? number1 / number2 : "Cannot divide by 0";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <h2>Results:</h2>
      <p>Addition = {addition}</p>
      <p>Subtraction = {subtraction}</p>
      <p>Multiplication = {multiplication}</p>
      <p>Division = {division}</p>
    </div>
  );
}

export default Calculator;