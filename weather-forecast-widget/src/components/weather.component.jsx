import React from 'react';

const Weather = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1>City</h1>
                <h4 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h4>
                <h2 className="py-2">26&deg;</h2>
                
                {/** Show min and max temp */}
                {tempMinMax(15, 28)}

                <h3 className="py-3">Sunny</h3>
            </div>
        </div>
    )
}

function tempMinMax(min,max){
    return (
        <h4>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h4>
    )
}

export default Weather;