import * as React from 'react';
import { useState , useEffect } from 'react';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';


export default function WeatherApp() {

  const [searchValue, setSearchValue] = useState("lahore");
  const [tempInfo, setTempInfo] = useState({});

  const weatherInfo = async () => {
    try {
      let url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3b62935b3c3df8e4413c77dd35481ee6`;
      
      const res = await fetch(url);
      const data = await res.json();

// Get apni marzi ka Data 
      const {temp , pressure, humidity} = data.main;
      const {main: weatherMood} = data.weather[0];
      const {speed} = data.wind;
      const {country, sunrise, sunset} = data.sys;
      const {name} = data;

// Store Data 

    const myData = {
      temp , pressure, humidity, weatherMood, 
      speed, country, sunrise, sunset, name,
    };

    setTempInfo(myData);
      
      

    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
    weatherInfo();
  },
  []
);

  
  return (
  <>
     <div className="d-flex justify-content-center mt-5">

        <input className="form-control me-2 w-25" 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
        type="search" placeholder="Search" 
        aria-label="Search" name="cityclass" />

        <button className="btn btn-outline-success" onClick={weatherInfo}> <SearchIcon /> </button>

      </div>

    <WeatherCard tempInfo={tempInfo} />
      
  </>
  );
}


