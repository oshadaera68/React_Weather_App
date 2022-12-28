/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a84c7fc60d02500e0530fbdfa4f6f548`;

  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' onKeyPress={searchlocation} type="text" />
      </div>
      <div className="container">
        <div className="top">

          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            <h1>{data.main ? <h1>{data.main.temp}°F</h1> : null}</h1>
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>

{data.name !== undefined &&
  <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
}

        
      </div>
    </div>
  );
}

export default App;
