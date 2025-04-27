
import { useState } from "react"
import axios from 'axios'


function App() {
 
  const [qoutes,setQoutes]=useState([])
 
  const getJokes=async()=>{
    const response= await axios.get("http://localhost:3000/jokes")
    const jokes=await response.data
    setQoutes(jokes.jokes)
    
    
  
  }

  

  return (
    <>
      <h1>Hey this is a simple random qoute generator app</h1>
      {
        qoutes.map((joke)=>
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        )
      }

      <button onClick={()=>{setQoutes([])}}>clear</button>
      <button onClick={getJokes} > get</button>
    </>
  )
}

export default App
