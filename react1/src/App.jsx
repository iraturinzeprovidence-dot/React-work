import React from "react";

function App() {

  const studentName = "Providence";
  const courseName = "Frontend Development";
  const year= 2026;
  const changeText = () => {
    document.getElementById("heading").innerText = "JavaScript is controlling this page!";
  };

  

 
  console.log(`Welcome ${studentName} to the ${courseName} course in the year ${year}!`);

  return (
  
    

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 id="heading">Welcome to my website</h1>
      <button onClick={changeText}>Button</button>
    </div>
  );

 
    
   
  
}

export default App;