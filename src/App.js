import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click
  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput(input + value);
    }
  };

  // Perform the calculation
  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear input
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Simple Calculator</h2>
        
        {/* Display Area */}
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right p-3 text-xl border border-gray-300 rounded-md focus:outline-none mb-2"
          />
          <div className="text-right text-lg text-gray-700">
            {result ? `= ${result}` : ''}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>
          <button onClick={() => handleClick('+')} className="btn bg-blue-500 text-white">+</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>
          <button onClick={() => handleClick('-')} className="btn bg-blue-500 text-white">-</button>

          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('*')} className="btn bg-blue-500 text-white">*</button>

          <button onClick={() => handleClick('0')} className="btn">0</button>
          <button onClick={() => handleClick('.')} className="btn">.</button>
          <button onClick={() => handleClick('C')} className="btn bg-red-500 text-white">C</button>
          <button onClick={() => handleClick('/')} className="btn bg-blue-500 text-white">/</button>

          <button onClick={() => handleClick('=')} className="btn bg-green-500 text-white col-span-4">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
