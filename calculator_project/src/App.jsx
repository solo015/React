import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };
  

  const handleCalculate = () => {
    try {
      // Evaluate the expression (use with caution)
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Define buttons for digits and operations
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Calculator</h1>
        <input
          type="text"
          value={input}
          className="w-full p-2 border rounded mb-2 text-right text-xl shadow-sm"
          readOnly
        />
        <div className="text-xl font-bold mb-4 text-right">{result}</div>

        <div className="grid grid-cols-4 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => {
                if (button === '=') {
                  handleCalculate();
                } else {
                  handleButtonClick(button);
                }
              }}
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              {button}
            </button>
          ))}
          <button
            className="col-span-4 p-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;