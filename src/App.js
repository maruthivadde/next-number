import React, { useState } from 'react';

import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [nextNumbers, setNextNumbers] = useState([]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (isNaN(value)) {
      setMessage('');
      setNextNumbers([]);
      return;
    }

    setInputValue(e.target.value);

    if (value < 0) {
      setMessage('Enter a positive value');
      setNextNumbers([]);
    } else if (value % 2 === 0) {
      setMessage('Next 3 even numbers:');
      setNextNumbers([value + 2, value + 4, value + 6]);
    } else {
      setMessage('Next 3 odd numbers:');
      setNextNumbers([value + 2, value + 4, value + 6]);
    }
  };

  return (
    <div className='bg-container'>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
        className='input-container'
      />
      {message && <p>{message}</p>}
      {nextNumbers.length > 0 && (
        <ul>
          {nextNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;