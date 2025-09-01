import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  // let counter = 0;
  
  const addValue = () =>{
    if (counter <= 19){
    setCounter(counter + 1);}
  }
  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
     <h1>Chae aur React</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Increase value </button>
     <br/>
     <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
