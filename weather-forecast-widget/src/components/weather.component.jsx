import React from 'react';

const Weather = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h4 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h4>
                <h2 className="py-2">{props.temp_celsius}&deg;C</h2>
                
                {/** Show min and max temp */}
                {tempMinMax(props.temp_min, props.temp_max)}

                <h5 className="py-1">{props.description}</h5>
                <p className="py-1">Wind: {props.windspeed}km/h {props.wind_direction}</p>
            </div>
        </div>
    )
}

function tempMinMax(min,max){
    return (
        <h5>
            <span className="px-4">{min}&deg;C / {max}&deg;C</span>
        </h5>
    )
}

export default Weather;