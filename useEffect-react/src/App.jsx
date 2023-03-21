import { useState,useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <ExternalUser/>
    </div>
  )
}

function ExternalUser() {
  const [users,setUsers]=useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users	`)
    .then(res=>res.json())
    .then(data=>setUsers(data))
  
  
  }, [])
  
  return(
    <div>
      <h3>ExternalUser</h3>
      <p>{users.length}</p>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }

    </div>
  )
}
function User(props) {
  return(
    <div style={{margin:'20px',border:'red solid'}}>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
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