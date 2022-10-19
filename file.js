import React from 'react';
import {useState} from 'react'

function File(props) {
const [userName, setUserName] = useState();

    console.log(props.data,props.userName)
    
  return (
    <div>
       <p value={userName} onChange={(e) => setUserName(e.target.value)}></p>
    </div>
  )
}

export default File