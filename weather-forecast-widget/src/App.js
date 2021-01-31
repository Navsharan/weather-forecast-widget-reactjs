import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather.component';

// Location code
const woeid = 1105779;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon_abbr: undefined,
      main: undefined,
      celsius: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: "",
      windspeed: undefined,
      wind_direction: undefined,
      error: false
    };

    this.getWeather();
  }

  // Get weather data from MetaWeather API.
  getWeather = async () => {
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

    const response = await api_call.json();
    
    console.log(response);

    this.setState({
      city: response.title,
      country: response.parent.title,
      icon_abbr: response.consolidated_weather[1].weather_state_abbr,
      celsius: parseInt(response.consolidated_weather[0].the_temp),
      temp_min: parseInt(response.consolidated_weather[0].min_temp),
      temp_max: parseInt(response.consolidated_weather[0].max_temp),
      description: response.consolidated_weather[0].weather_state_name,
      windspeed: parseInt((response.consolidated_weather[0].wind_speed)*1.609344),
      wind_direction: response.consolidated_weather[0].wind_direction_compass
    })
  }

  render(){
    return(
      <div className="App">
        <Weather 
        city={this.state.city}
        country={this.state.country}
        icon_abbr={this.state.icon_abbr}
        temp_celsius={this.state.celsius}
        temp_min={this.state.temp_min}
        temp_max={this.state.temp_max}
        description={this.state.description}
        windspeed={this.state.windspeed}
        wind_direction={this.state.wind_direction}
        weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
