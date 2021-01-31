import React from 'react';

const Weather = (props) => {

    // URL to get weather icons from MetaWeather.
    const icon_url = `https://www.metaweather.com/static/img/weather/${props.icon_abbr}.svg`;

    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city}</h1>
                <h5>{props.country}</h5>
                <img className="py-4" src={icon_url} alt="weather icon"/>
                <h2 className="py-2">{props.temp_celsius}&deg;C</h2>
                <h5 className="py-1">{props.temp_min}&deg;C / {props.temp_max}&deg;C</h5>
                <h5 className="py-1">{props.description}</h5>
                <p className="py-1">Wind: {props.windspeed}km/h {props.wind_direction}</p>
            </div>
        </div>
    )
}

export default Weather;