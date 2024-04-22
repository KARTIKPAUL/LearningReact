import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] = useState(15);

  const addValue = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }

  const removeValue = () => {
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
  }

  return (
    <>
      <h1>This is A Counter App</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}
      >Add Value</button> {" "}
      <button onClick={removeValue} 
      >Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
