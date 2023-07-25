
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNumbers((prevNumbers) => [...prevNumbers, Number(inputValue)]);
    updateSum();
  };

  const updateSum = () => {
    // Use setTimeout to update the sum asynchronously
    setTimeout(() => {
      const newSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(newSum);
    }, 0);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleInputChange} />
      <div>
        <strong>Sum:</strong> {sum}
      </div>
    </div>
  )
}

export default App
