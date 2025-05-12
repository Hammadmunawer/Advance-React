import React, { useState } from 'react'

const Counter=()=> {
  const [count,setCount]=useState(0)
  const handleCounter=()=>setCount(count+1)
  
    return (
    <div>
        <p>{count}</p>
<button onClick={handleCounter}>+</button>

    </div>
  )
}

export default Counter