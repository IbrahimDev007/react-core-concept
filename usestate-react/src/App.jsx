import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
     <Counter/>
    </div>
  )
}

export default App
function Counter() {
  let [count, setCount] = useState(0)
  const increaseCount=()=>{
  const newCount=count+1;
   setCount(newCount);
  }

  return(
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={()=>setCount(count--)}>Increase</button>
    </div>
  )
}