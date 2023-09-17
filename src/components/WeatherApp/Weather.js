import React, { useState } from 'react'
import './Weather.css'
import search__icon from '../assits/search.png';
import clear__icon from '../assits/clear.png';
import cloud__icon from '../assits/cloud.png';
import drizzle__icon from '../assits/drizzle.png';
import rain__icon from '../assits/rain.png';
import snow__icon from '../assits/snow.png';
import wind__icon from '../assits/wind.png';
import humidity__icon from '../assits/humidity.png';

function Weather() {

    let api_key = "030c9c683ccff958202d0ec3d9889ec3";

    const [wicon,setWicon] = useState(cloud__icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+ " % ";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°c";
        location[0].innerHTML = data.name;

        if(data.Weather[0].icon==="01d" || data.Weather[0].icon==="01n")
        {
            setWicon(clear__icon);
        }
        else if(data.Weather[0].icon==="02d" || data.Weather[0].icon==="02n")
        {
            setWicon(cloud__icon);
        }
        else if(data.Weather[0].icon==="03d" || data.Weather[0].icon==="03n")
        {
            setWicon(drizzle__icon);
        }
        else if(data.Weather[0].icon==="04d" || data.Weather[0].icon==="04n")
        {
            setWicon(drizzle__icon);
        }
        else if(data.Weather[0].icon==="09d" || data.Weather[0].icon==="09n")
        {
            setWicon(rain__icon);
        }
        else if(data.Weather[0].icon==="10d" || data.Weather[0].icon==="10n")
        {
            setWicon(rain__icon);
        }
        else if(data.Weather[0].icon==="13d" || data.Weather[0].icon==="13n")
        {
            setWicon(snow__icon);
        }
        else{
            setWicon(clear__icon);
        }
    }



  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search__icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity__icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                     <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind__icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                     <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
