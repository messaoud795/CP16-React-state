import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./profile/Profile";
import pic from "./pic.jpg";

function App() {

// get the state : Boolean show and function set visibilty
const[show, setvisibily]=useState(true);

// function to toggle show boolean and the button text
function showProfile() {
  setvisibily(!show);
var c=document.getElementById("showAndHide");
show?c.innerHTML="show profile":c.innerHTML="hide profile";
}

// declare a function to alert with the name 
  const setAlert = (name) => {
    alert(name);
  };

  // declare an object user 
  const user = {
    fullName: "Jonny Kim",
    profession: "(M.D.) (Lieutenant, U.S. Navy) NASA Astronaut",
    bio:
      "Dr. Jonny Kim was selected by NASA to join the 2017 Astronaut Candidate Class. He reported for duty in August 2017 and having completed the initial astronaut candidate training is now eligible for a mission assignment. A U.S. Navy SEAL, Kim completed more than 100 combat operations and is the recipient of the Silver Star and Bronze Star with Combat “V”. Kim was commissioned as a naval officer through an enlisted-to-officer program and earned his degree in mathematics at the University of San Diego and a doctorate of medicine at Harvard Medical School.",
  };

  //display the time when the profile component is mounted
  useEffect(()=>{
       var p=document.getElementById("showTime");
  var  time= new Date().toLocaleTimeString();
   show?p.innerHTML="The time when this profile was showed  "+time:p.innerHTML='';
  })

  return (
    <div className="App">
      {/* buttun to show and hide profile component */}
      <button id="showAndHide" onClick={showProfile} >hide profile</button>

      {/* use of profile component with props, handleName as function and image as props children */}
      <div>{show && <Profile user={user} handleName={setAlert}>
        <img src={pic} alt="" /></Profile> }
        </div>
        
        {/* display time */}
        <p id="showTime"></p>
    </div>
  );
  }

export default App;