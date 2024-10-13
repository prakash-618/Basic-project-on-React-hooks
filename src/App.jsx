import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter =15

  const addValue = ()=>{
    counter++
    console.log(counter);
    setCounter(counter)
  }
  const removeValue = ()=>{
    counter--;
    console.log(counter);
    setCounter(counter)
  }

  return (
    <>
        <h1>Counter Value :{counter}</h1>

        <button onClick={addValue}>Add value</button>
        <br />
        <br />
        <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
