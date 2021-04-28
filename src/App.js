
import React,{Component} from 'react'
import './App.css';
import Bio from './Profile/bio';
import Fullname from './Profile/Fullname';
import Profession from './Profile/profession';
import myImage from './Profile/sirine2.jpg'
import PropTypes from "prop-types";
import User from './Profile/user';






Fullname.propTypes = {
  name: PropTypes.string.isRequired,
 };
 Bio.prototype={
   text: PropTypes.string.isRequired,
 }
Profession.prototype ={
title:PropTypes.string.isRequired,
}


function getData() {
  alert("Sirine Bennaceur")
  }




class App extends Component {
  
  render(){
   
  return (
     <div className="App">
    <div>
 <User data ={getData}/>
 </div>
 <br />
  <div style={{color: "black", textAlign: "center",fontFamily: "fantasy"}}>
  <Fullname name="Sirine Bennaceur" ><img src={myImage} alt="" width="400" height="400" /></Fullname>
</div>
  <br />

  <div style={{color: "black", textAlign: "center",fontFamily: "fantasy"}}>
  <Profession title="A Fullstack Js developer"/>
  </div>
  <br />
  <div style={{color: "black", textAlign: "center",fontFamily:"cursive"}}></div>
  <Bio text="I've been an Electrical automatic enginner,i graduated in October 2020 from national school of 
            engineers of Gabes.I did a professional transition to discover new challenges and better opportunities.
            I recently joind a very instructive Course among GOMYCODE team and I instantly started to learn a lot in a very short period.
             I'm able now to use Html, CSS and javascript to create my Web applications
		I am a Devolper and also a Designer.I'm An ambitious person that accepts all kinds of
            challenges and has no limitations.."/>
  <br />
 
    </div>
  )
  }
     }


export default App;
