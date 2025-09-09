// Todo List Project 

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]); // Changed 'output' to 'todos'
  const [error, setError] = useState(''); // Added error state for validation

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addInput = () => {
    if (input.trim()) { // Check if input is not empty
      setTodos((prevTodos) => [...prevTodos, input]); // Correctly update todos
      setInput(''); // Clear input field
      setError(''); // Clear any previous error messages
    } else {
      setError('Please enter a todo'); // Set error message if input is empty
    }
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)); // Remove todo by index
  };

  const reverseTodos = () => {
    setTodos((prevTodos) => [...prevTodos].reverse());
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Todo List Manager</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="p-3 border border-gray-300 rounded-lg mb-4 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new todo"
      />
      <button
        className="p-3 bg-blue-500 text-white rounded-lg w-full max-w-md hover:bg-blue-600 transition duration-200"
        onClick={addInput} // Call addInput function here
      >
        Add Todo
      </button>
      <button
        className="p-3 mt-3 bg-blue-500 text-white rounded-lg w-full max-w-md hover:bg-blue-600 transition duration-200"
        onClick={reverseTodos} 
      >
        Reverse Todos
      </button>

      <ul className="w-full max-w-md mt-4">
        {todos.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-3 border-b border-gray-300 bg-white rounded-lg shadow-sm mb-2 hover:bg-gray-50">
            <span className="cursor-pointer">{item}</span>
            <button className="text-red-500 hover:text-red-700" onClick= {() => removeTodo(index)}>Remove</button>
          </li>
          
        ))}
      </ul>
      <p className="text-red-500 mt-2">{error}</p> {/* Display error message */}
    </div>
  );
}

export default App;