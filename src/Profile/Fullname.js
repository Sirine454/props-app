import React from 'react'


const Fullname = (props) => {
 
return (
  
<div>
 <h1>{props.name}</h1>
 <img src={props.src}/>
      {props.children}
      
</div>
)
}
export default Fullname

