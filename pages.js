import React from 'react'
import {useState} from 'react';

function Pages() {
const [firstName, setFirstName] = useState('');
const [lastName,setLAstName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const Submit =() =>{
    alert("Successfully Submitted")
}
  return (
    <div className='r'>
        <p>FirstName</p>
     <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name"></input>
     <p>LasttName</p>
     <input value={lastName} onChange={(e) => setLAstName(e.target.value)} placeholder="Last name"></input>
     <p>Email</p>
     <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
     <p>Password</p>
     <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
     <p><br></br></p>
    <button onClick={Submit} ><a href="login" >Submit</a></button>
     
    </div>
  )
}

export default Pages