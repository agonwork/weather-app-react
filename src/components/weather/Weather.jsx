import { useEffect, useState } from "react";
import Search from "../search/Search";
import { FaLocationDot } from "react-icons/fa6";
import { CURRENT_WEATHER } from "../../../data";

//The search component is implemented in this file Weather.jsx
export function CurrentWeather({ weatherDesc, getWeatherImage }) {
  const weatherImage = getWeatherImage(weatherDesc); // Call the function to get the image path

  return (
    <div>
      {weatherImage && (
        <img className="imageDesc" src={weatherImage} alt={weatherDesc} />
      )}
    </div>
  );
}
export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  //json data is fetched and it triggers a loading phase
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=972544a3cdc4f40fadbb9bddfefb9117`
      );

      const data = await response.json();
      if (data.cod && data.cod !== 200) {
        setWeatherData(null);
        setLoading(false);
        
      } else {
        setWeatherData(data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("Prishtina");
  }, []);
  console.log(weatherData);

  const getWeatherImage = (weatherDesc) => {
    const weatherInfo = CURRENT_WEATHER.find(
      (weather) => weather.weatherDesc === weatherDesc
    );
    return weatherInfo ? weatherInfo.image : null;
  };
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="city-name">
          <h2>
            <FaLocationDot />
            {weatherData?.name}, <span>{weatherData?.sys.country}</span>
          </h2>

          <CurrentWeather
            weatherDesc={weatherData?.weather[0]?.main}
            getWeatherImage={getWeatherImage}
          />
          <div className="city-name">
            {weatherData ? (
              <CurrentWeather
                weatherMain={weatherData.weather[0].main}
                getWeatherImage={getWeatherImage}
              />
            ) : (
              <div>
                <img src="src/assets/404.png" alt="" />
                <p>Invalid location!</p>
              </div>
            )}
          </div>
          <div className="temp">
            {Math.round(weatherData?.main?.temp) + "°C"}
          </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
              : ""}
          </p>

          <div className="weather-info">
            <div>
              <p>Wind Speed</p>
              <p className="wind">{weatherData?.wind?.speed} km/h</p>
            </div>

            <div>
              <p>Humidity</p>
              <p className="humidity">{weatherData?.main?.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
