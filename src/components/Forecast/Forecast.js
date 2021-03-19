import React, { useState } from 'react';
import conditions from './components/Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city)
   function getForecast() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=seattle&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bd63ea38a1msh9ee293126e03f6cp192d21jsn78d498056c51",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json()) /*imp*/
    .then(response => {
        setResponseObj(response)
    })
    .catch(err => {
        console.error(err);
    });
}
function getForecast(e) {
    e.preventDefault();
}
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    className={classes.textInput}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        label className={classes.Radio}
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        label className={classes.Radio}
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>

            <button type="submit">Get Forecast</button>
            </form>

            <div>
           <Conditions /*imp*/
               responseObj={responseObj}
               />
            </div>
    </div>
   )

}
export default Forecast;