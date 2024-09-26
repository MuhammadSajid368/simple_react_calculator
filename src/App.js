
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
        <div className="p-4 bg-gray-800">
          <h1 className="text-white text-2xl text-right" id="display">{input || result || '0'}</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <button onClick={() => handleButtonClick('7')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">7</button>
          <button onClick={() => handleButtonClick('8')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">8</button>
          <button onClick={() => handleButtonClick('9')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">9</button>
          <button onClick={() => handleButtonClick('/')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">/</button>

          <button onClick={() => handleButtonClick('4')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">4</button>
          <button onClick={() => handleButtonClick('5')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">5</button>
          <button onClick={() => handleButtonClick('6')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">6</button>
          <button onClick={() => handleButtonClick('*')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">*</button>

          <button onClick={() => handleButtonClick('1')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">1</button>
          <button onClick={() => handleButtonClick('2')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">2</button>
          <button onClick={() => handleButtonClick('3')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">3</button>
          <button onClick={() => handleButtonClick('-')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">-</button>

          <button onClick={() => handleButtonClick('⌫')} className="bg-gray-300 p-3 rounded hover:bg-gray-400 col-span-2 color-white ">Backspace</button>
          <button onClick={() => handleButtonClick('C')} className="bg-red-500 p-3 rounded hover:bg-red-600 text-white col-span-2">C</button>
          <button onClick={() => handleButtonClick('0')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">0</button>
          <button onClick={() => handleButtonClick('.')} className="bg-gray-200 p-3 rounded hover:bg-gray-300">.</button>
          <button onClick={() => handleButtonClick('+')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">+</button>

          <button onClick={() => handleButtonClick('%')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">%</button>

          <button onClick={() => handleButtonClick('=')} className="bg-green-500 p-3 rounded col-span-4 hover:bg-green-600 text-white">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
