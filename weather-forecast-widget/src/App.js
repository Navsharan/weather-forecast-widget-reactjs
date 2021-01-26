import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather.component';

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
