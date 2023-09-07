import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WeatherCard = ({tempInfo}) => {

    const [wtherMood, setwtherMood] = useState("");
    const [time, setTime] = useState(new Date());

    const {
        temp , pressure, humidity, weatherMood, 
        speed, country, sunrise, sunset, name
      } = tempInfo;

// WeatherMood Function
      useEffect(() => {
        if(weatherMood) {
            switch (weatherMood) {
                case "Clouds": setwtherMood("bi-cloud-lightning-rain-fill");
                    break;

                case "Haze": setwtherMood("bi-cloud-haze-fill");
                    break;

                case "Clear": setwtherMood("bi-emoji-sunglasses-fill");
                    break;

                case "Sunny": setwtherMood("bi-sun-fill");
                    break;

                case "Mist": setwtherMood("bi-cloud-fog2-fill");
                    break;

                 case "Smoke": setwtherMood("bi-cloud-fog");
                    break;

                default:
                    setwtherMood("bi bi-cloud-sun");
                    break;
            }
        }

      },
      [weatherMood]);

// Live Time Function
      useEffect(() => {
        setInterval(() => setTime(new Date()),1000)
      }, 
      []);

// Set Date
      const d = new Date();
      const ok = d.getDate() 
      const ok1 = d.getMonth() 
      const ok2 = d.getFullYear();

//   sunrise function
      let second = sunrise;
      let rise = new Date(second*1000);
      let SunriseTime = `${rise.getHours()}:${rise.getMinutes()}`

// Sunset function 
      let sec = sunset;
      let date = new Date(sec*1000);
      let SunsetTime = `${date.getHours()}:${date.getMinutes()}`
    return (
    <>
    <div className="container">
    <div className="row justify-content-center mt-5">
    <div className="col-lg-9">
    <div className="card bg-info p-3">
        <div className="row ms-2 card-body">
        <div className="card-title col-4 d-flex">
           <i className={`bi ${wtherMood} editIcon`}></i>
        <div className='ms-1 mt-4'>
            <h1> {weatherMood} </h1>
        </div>
            </div>

       
        <div className='line col-4 text-center mt-4'>
            <h1> {temp} </h1>
            <small> {name},{country} </small>
        </div>
        
        <div className='line col-4 text-center mt-4'>
                <h2> {time.toLocaleTimeString()} </h2>
                <h4> {ok}/{ok1}/{ok2} </h4>
        </div>
        </div>

                    <br/>  <hr/><br/>


    <div className="row">
    <div className="col d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-sunrise-fill" viewBox="0 0 16 16">
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div className='line ms-2'>
            <h5> {SunriseTime} </h5>
            <p> Sunrise </p> 
        </div>
    </div>
    <div className="col d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-sunset-fill" viewBox="0 0 16 16">
            <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        </svg> 
        <div className='line ms-2'>
            <h5> {SunsetTime} </h5>
            <p> Sunset </p> 
        </div>
    </div>
    <div className="col d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-moisture" viewBox="0 0 16 16">
            <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
        </svg>
        <div className='line ms-2'>
            <h5> {humidity} </h5>
            <p> Humidity </p> 
        </div>
    </div>
    <div className="col d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cloud-haze2" viewBox="0 0 16 16">
            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div className='line ms-2'>
            <h5> {pressure} </h5>
            <p> Pressure </p> 
        </div>
    </div>
    <div className="col d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-wind" viewBox="0 0 16 16">
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div className='line ms-2'>
            <h5> {speed} </h5>
            <p> Wind </p> 
        </div>
    </div>
    
    
    </div>
    </div>
    </div>
    </div>
    </div>

    </>
)}

export default WeatherCard;