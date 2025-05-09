import React from 'react'

export default function Props({img,name,isMarried,hobbies}) {
   
  return (
    <section>
        <img src={img} alt={name} />
<h1>Name:{name}</h1>
<h2>age:{age}</h2>
<h3>is married: {isMarried} </h3>
<h4>hobbies:{hobbies}</h4>

    </section>
  )
}
