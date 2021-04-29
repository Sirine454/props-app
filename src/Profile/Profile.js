import React from 'react'


const Profile = (props) => {
  props.handelName(`Hello ${props.name}`)
    return (
      
   
   
   <div>
    
  
     <h1>{props.name}</h1>
     <img src={props.src}/>
          {props.children}
          <h2> {props.title}</h2>
    <p>{props.text}</p>
        {/* <button onClick={()=>props.handelName(`hello ${props.name}`)}></button> */}
  
    </div>
    )
    }
    export default Profile