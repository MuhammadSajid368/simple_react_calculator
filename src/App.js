import { useReducer, useEffect, useState } from 'react';

const initialState = {
  input: '',
  result: null,
  memory: 0,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, input: state.input + action.payload };
    case 'EVALUATE':
      try {
        const newResult = eval(state.input);
        return {
          input: '',
          result: newResult,
          history: [...state.history, { expression: state.input, result: newResult }],
        };
      } catch (error) {
        return { ...state, result: 'Error' };
      }
    case 'CLEAR':
      return initialState;
    case 'BACKSPACE':
      return { ...state, input: state.input.slice(0, -1) };
    case 'MEMORY_ADD':
      return { ...state, memory: state.memory + state.result };
    case 'MEMORY_SUBTRACT':
      return { ...state, memory: state.memory - state.result };
    case 'MEMORY_RECALL':
      return { ...state, input: state.memory.toString() };
    case 'MEMORY_CLEAR':
      return { ...state, memory: 0 };
    case 'SQUARE':
      return { ...state, result: Math.pow(state.result, 2) };
    case 'SQUARE_ROOT':
      return { ...state, result: Math.sqrt(state.result) };
    case 'PERCENTAGE':
      return { ...state, result: state.result / 100 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState('light');

  const handleButtonClick = (value) => {
    if (value === '=') {
      dispatch({ type: 'EVALUATE' });
    } else if (value === 'C') {
      dispatch({ type: 'CLEAR' });
    } else if (value === '⌫') {
      dispatch({ type: 'BACKSPACE' });
    } else {
      dispatch({ type: 'ADD_INPUT', payload: value });
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const value = event.key;
      if (!isNaN(value) || ['+', '-', '*', '/', '=', 'C', 'Backspace'].includes(value)) {
        handleButtonClick(value === 'Backspace' ? '⌫' : value);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className={`bg-white shadow-lg rounded-lg overflow-hidden w-80 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-4 bg-gray-800">
          <h1 className="text-white text-2xl text-right">{state.input || state.result || '0'}</h1>
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

          <button onClick={() => handleButtonClick('0')} className="bg-gray-200 p-3 rounded hover:bg-gray-300 col-span-2">0</button>
          <button onClick={() => handleButtonClick('C')} className="bg-red-500 p-3 rounded hover:bg-red-600 text-white">C</button>
          <button onClick={() => handleButtonClick('+')} className="bg-orange-400 p-3 rounded hover:bg-orange-500 text-white">+</button>
          <button onClick={() => handleButtonClick('=')} className="bg-green-500 p-3 rounded hover:bg-green-600 text-white">=</button>

          <button onClick={() => dispatch({ type: 'MEMORY_ADD' })} className="bg-blue-500 p-3 rounded text-white">M+</button>
          <button onClick={() => dispatch({ type: 'MEMORY_SUBTRACT' })} className="bg-blue-500 p-3 rounded text-white">M-</button>
          <button onClick={() => dispatch({ type: 'MEMORY_RECALL' })} className="bg-blue-500 p-3 rounded text-white">MR</button>
          <button onClick={() => dispatch({ type: 'MEMORY_CLEAR' })} className="bg-blue-500 p-3 rounded text-white">MC</button>

          <button onClick={() => dispatch({ type: 'SQUARE' })} className="bg-gray-200 p-3 rounded hover:bg-gray-300">x²</button>
          <button onClick={() => dispatch({ type: 'SQUARE_ROOT' })} className="bg-gray-200 p-3 rounded hover:bg-gray-300">√</button>
          <button onClick={() => dispatch({ type: 'PERCENTAGE' })} className="bg-gray-200 p-3 rounded hover:bg-gray-300">%</button>
        </div>
        <div>
          <h2 className="text-lg font-semibold">History:</h2>
          <ul>
            {state.history.map((entry, index) => (
              <li key={index} className="text-gray-700">{`${entry.expression} = ${entry.result}`}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-3 rounded">
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
      </div>
    </div>
  );
}

export default App;
