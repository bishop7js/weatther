import React from "react";
import HOC from "../HOC";
import { Space, Card } from "antd";

const NewYork = (props) => {
  const { weatherData } = props;

  const weatherDataTitle = `Current weather in ${weatherData?.name}`;

  return (
    <Space direction="vertical" size={16}>
      <Card
        title={weatherDataTitle}
        style={{
          width: 300,
          backgroundColor: "#A2FCEF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Temperature (K) : </div>
          <div style={{ fontWeight: "bold" }}>{weatherData.main?.temp}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Humidity (%) : </div>
          <div style={{ fontWeight: "bold" }}>{weatherData.main?.humidity}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Conditions : </div>
          <div style={{ fontWeight: "bold" }}>
            {weatherData &&
            weatherData.weather &&
            weatherData.weather.length > 0 ? (
              <div>{weatherData.weather[0].description}</div>
            ) : null}
          </div>
        </div>
      </Card>
    </Space>
  );
};

const GetNewyorkWeatherData = HOC(NewYork, "new york");

export default GetNewyorkWeatherData;
