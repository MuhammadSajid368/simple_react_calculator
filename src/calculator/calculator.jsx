import React, { useState } from 'react';

function Calculator() {
  // State for numbers and result
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleInput1Change = (e)=>setInput1(e.target.value);
  const handleInput2Change = (e)=>setInput2(e.target.value);

  const add = () => setResult(parseFloat(input1)+ parseFloat(input2))
  const subtract =()=>setResult(parseFloat(input1)- parseFloat(input2)); 
  const multiply = () =>  setResult(parseFloat(input1)* parseFloat(input2));
  const divide = () => setResult(parseFloat(input1)/ parseFloat(input2))


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Simple Calculator</h2>

        {/* Input fields */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter first number"
            value={input1}
            onChange={handleInput1Change}
            className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Enter second number"
            value={input2}
            onChange={handleInput2Change}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Buttons for operations */}
        <div className="flex justify-between mb-5">
          <button
            onClick={add}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={subtract}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={multiply}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            *
          </button>
          <button
            onClick={divide}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            /
          </button>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="text-center text-xl font-semibold text-gray-800">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
