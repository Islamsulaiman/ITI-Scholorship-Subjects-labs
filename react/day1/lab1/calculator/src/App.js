/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import { useState } from 'react';

function App() {

  // const [num1, setNum1] = useState('');
  // const [num2, setNum2] = useState('');
  // const [result, setResult] = useState('');

  // const handleNum1Change = (event) => {
  //   setNum1(event.target.value);
  // }

  // const handleNum2Change = (event) => {
  //   setNum2(event.target.value);
  // }

  // const handleAddition = () => {
  //   setResult(Number(num1) + Number(num2));
  // }
  // const handleSub = () => {
  //   setResult(Number(num1) - Number(num2));
  // }
  // const handleMult = () => {
  //   setResult(Number(num1) * Number(num2));
  // }
  // const handleDivide = () => {
  //   if(num1===0 || num2===0){
  //     setResult("Cant divide")
  //   }else{
  //     setResult(Number(num1) / Number(num2));

  //   }
  // }

  // return (
  //   <div>
  //     <input type="number" placeholder="Enter a number" value={num1} onChange={handleNum1Change} />
  //     <input type="number" placeholder="Enter a number" value={num2} onChange={handleNum2Change} />


  //     <button onClick={handleAddition}>Add</button>
  //     <button onClick={handleSub}>Sub</button>
  //     <button onClick={handleMult}>Mult</button>
  //     <button onClick={handleDivide}>Divide</button>
  //     <p>Result: {result}</p>
  //   </div>
  // );






  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

 
  
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
