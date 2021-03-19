import React, { useState } from 'react';
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bd63ea38a1msh9ee293126e03f6cp192d21jsn78d498056c51",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    .catch(err => {
        console.error(err);
    });
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        {JSON.stringify(responseObj)}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
</div>
   )
}
export default Forecast;