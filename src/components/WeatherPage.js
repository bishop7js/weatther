import React from "react";
import { Button, Space, Form, Select, Card } from "antd";
import usa from "../media/usa.png";
import citiesData from "../data/cities.json";
import Newyork from "../components/main cities/Newyork";
import Sanfrancisco from "../components/main cities/Sanfrancisco";
import Washinton from "../components/main cities/Washinton";

const Weather = (props) => {
  const { Option } = Select;

  const { weatherData, fetchWeatherData } = props;

  const weatherDataTitle = `Current weather in ${weatherData?.name}`;

  console.log("WWWWWWWWWWWWWWWWWWWWWWWeatherdata", citiesData);

  const renderWeatherOutputCard = () => {
    if (weatherData !== undefined) {
      return (
        <Space direction="vertical" size={16}>
          <Card
            title={weatherDataTitle}
            style={{
              width: 300,
              backgroundColor: "#C6FB98",
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
              <div style={{ fontWeight: "bold" }}>
                {weatherData.main?.humidity}
              </div>
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
    } else {
      return <div>Hello there</div>;
    }
  };

  const renderDataInputForm = () => {
    const onFinish = (values) => {
      console.log("Success:", values);

      fetchWeatherData(values);
    };

    return (
      <div>
        <Form onFinish={onFinish}>
          <Form.Item name="city" label="Select the city">
            <Select
              placeholder="Select a city"
              //onChange={onGenderChange}
              allowClear
            >
              {citiesData.cities.map((city) => {
                return <Option value={city.value}>{city.label}</Option>;
              })}
              {/* <Option value="female">female</Option>
              <Option value="other">other</Option> */}
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Get weather
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Current weather in USA</h1>
        <div>
          <img
            style={{
              width: "30px",
              height: "auto",
              marginTop: 24,
              marginLeft: 8,
            }}
            src={usa}
            alt="USA Flag"
          />
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Newyork />
        <Sanfrancisco />
        <Washinton />
      </div>
      <div>{renderDataInputForm()}</div>
      <div>{renderWeatherOutputCard()}</div>
    </div>
  );
};

export default Weather;
