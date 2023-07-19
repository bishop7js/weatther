import React, { useEffect, useState } from "react";

const HOC = (WrappedComponent, entity) => {
  const EnhancedComponent = () => {
    const [weatherData, setWeatherData] = useState({});

    const country = "USA";
    const apiKey = "a1a8d8e7d7a2f7295e1e4bd0645f263b";

    useEffect(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${entity},${country}&APPID=${apiKey}`;

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
    }, []);

    return <WrappedComponent weatherData={weatherData} />;
  };

  return EnhancedComponent;
};

export default HOC;
