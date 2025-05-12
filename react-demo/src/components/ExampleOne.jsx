import React, { useState } from 'react'

const  ExampleOne=()=> {
const [count,setCount]=useState(()=>{
  const initalCount=10;
  return initalCount
})

const increment=()=>{
  setCount((prevcount)=>prevcount+1)
}

  return (
    <div>
<h1>Count:{count}</h1>
<button onClick={increment}>increment</button>


    </div>
  )
}

export default ExampleOne