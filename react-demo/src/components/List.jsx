import React from 'react'

function List() {
 const usersInfo=[
{
    id:1,
username:"hammad",
email:"hammad@gmail.com",
location:"pak"},
{
    id:2,
username:"ali",
email:"ali@gamail.com",
location:"pak"},
{
    id:3,
username:"saeed",
email:"saeed@gmail.com",
location:"pak"}
 ]
  return (
 <main>
{
    usersInfo.map(({id,username,email,location})=>(
        <ul key={id}>
             <li>{username}</li>
             <li>{email}</li>
             <li>{location}</li>
             
             </ul>
    ))
}
 </main>
  )
}

export default List