import React from 'react'

const Comp2=({count,onClickHandler})=> {
const handleClick=()=>onClickHandler()

  return (
    <div>
<p>{count}</p>
<button onClick={handleClick}>increment</button>


    </div>
  )
}

export default Comp2