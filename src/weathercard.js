import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Weathercard({cardname,value}) {
  const [inputs,setinputs]=useState()

  useEffect(()=>{
    fetch("https://api.weatherapi.com/v1/current.json")

  },[])
  return (
    <div  style ={{backgroundColor:"white" ,width:"200px",padding:"30px", margin:"10px",
     height:"100px", border:"0px solid green" ,borderRadius:"9px"}} className="weather-card">
        <h4>{cardname} </h4>
        <h6>{value} </h6>

     
    </div>
  );
}

export default Weathercard;
