import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Weathercard({cardname,value}) {
  const [inputs,setinputs]=useState()

  useEffect(()=>{
    fetch("https://api.weatherapi.com/v1/current.json")

  },[])
  return (
    <div  style ={{backgroundColor:"white" ,width:"200px",
     height:"80px", border:"0px solid green" ,borderRadius:"9px"}} className="WeatherCard">
        <h2>{cardname} </h2>
        <h4>{value} </h4>

     
    </div>
  );
}

export default Weathercard;
