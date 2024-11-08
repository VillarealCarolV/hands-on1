import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h2>React Calculator</h2>
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>
        <div>Input: {input}</div>
        <div>Result: {result}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 60px)', gap: '10px' }}>
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>{value}</button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={value === '=' ? calculateResult : () => handleClick(value)}
          >
            {value}
          </button>
        ))}
        <button onClick={handleClear} style={{ gridColumn: 'span 4' }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
