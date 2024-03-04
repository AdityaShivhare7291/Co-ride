import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [newstate,getnewstate]=useState('');
  const options = {
    enableHighAccuracy: true, // enable high accuracy
    // timeout: 300000, // wait for 5 minutes
  };
  
  
  
  function success(position) {
    console.log(position);
    navigator.geolocation.watchPosition((position) => {
     console.log(position.coords.accuracy);
     getnewstate(position.coords.accuracy)
    });
  }
  
  function error(error) {
    console.log(error);
  }
  
  // Run the getCurrentPosition() method with custom options
  function Click()
  {
  navigator.geolocation.getCurrentPosition(
    success,
    error,
    options
  );
  }

  return (
    <div onClick={()=>{
      Click();
    }} >
    <button>Hello</button>
    <div>{newstate}</div>
    </div>
  );
  }

export default App;
