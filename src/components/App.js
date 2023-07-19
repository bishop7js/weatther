import React, { useEffect, useState } from "react";
import Weather from "./WeatherPage";

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  const apiKey = "a1a8d8e7d7a2f7295e1e4bd0645f263b";

  const fetchWeatherData = (values) => {
    console.log("VVVVVVVVVVVVVVVVVVVVVVValues", values);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${values.city},${values.country}&APPID=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Process the weather data here
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.log("Error fetching weather data:", error);
      });
  };

  return (
    <div>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </div>
  );
};

export default App;
