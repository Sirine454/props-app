
import React from 'react'
import './App.css';

import myImage from './Profile/sirine2.jpg'
import PropTypes from "prop-types";
import Profile from './Profile/Profile';








  
const App = () => {
  const handelName=(x)=> {
    alert(x)}
 const styleObject ={color:'black',fontFamily:'cursive'}
  return (
       <div className="App" >
    
 <div style ={styleObject}>
  <Profile name="Sirine Bennaceur" 
  title="A Fullstack Js developer" 
  text="I've been an Electrical automatic enginner,i graduated in October 2020 from national school of 
            engineers of Gabes.I did a professional transition to discover new challenges and better opportunities.
            I recently joind a very instructive Course among GOMYCODE team and I instantly started to learn a lot in a very short period.
             I'm able now to use Html, CSS ,javascript and React Js to create my Web applications
		I am a Devolper and also a Designer.I'm An ambitious person that accepts all kinds of
            challenges and has no limitations.."
            handelName={handelName}>
              <img src={myImage} alt="" width="400" height="500" />
              </Profile>
    </div>
</div>

  )
}
Profile.propTypes = {
name: PropTypes.string.isRequired,
text: PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
}
Profile.defaultProps = {
  name: 'Sirine Bennaceur'
};


export default App;
