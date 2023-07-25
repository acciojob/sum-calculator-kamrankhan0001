
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = Number(event.target.value);
    setNumbers((prevNumbers) => [...prevNumbers, inputValue]);
    const newSum = numbers.reduce((acc, num) => acc + num, inputValue);
    setSum(newSum);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleInputChange} />
      <div>
        <p>Sum: {sum}</p> 
      </div>
    </div>
  );
};

export default App;
