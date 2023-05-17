import { useState } from 'react'

import './App.css'

function App() {
  const[count , setCount] = useState(0);

  const increaseCount = () =>{
    setCount(count+1);
  }

  const decreaseCount = () =>{
    setCount(count-1);
  }
  const resetCount = () =>{
    setCount(0);
  }

  return (
    <div>
      <button onClick={decreaseCount}>-</button><span>{count}</span>
      <button onClick={resetCount}>0</button>{count}
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default App
