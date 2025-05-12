import React from 'react'

const Greeting=(props)=>{
  return props.timeOfDay==='morning'?  (<h1>good morning</h1>): (<h1>good After noon</h1>)
}

export default Greeting   
