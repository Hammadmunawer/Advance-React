import React from 'react'

function Greeting() {
  const greet="hello"
  const date=new Date() 
  
    return (
    <div>
      <h2>{greet}</h2>
      <p>Date:{date.getDate()}</p>

    </div>
  )
}

export default Greeting