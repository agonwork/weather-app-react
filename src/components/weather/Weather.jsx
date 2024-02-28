import { useEffect, useState } from 'react';
import Search from "../search/Search";
import { FaLocationDot } from "react-icons/fa6";
// import { CURRENT_WEATHER } from '../../../data.js';


//The search component is implemented in this file Weather.jsx


export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);


    //json data is fetched and it triggers a loading phase 
    async function fetchWeatherData(param) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=972544a3cdc4f40fadbb9bddfefb9117`);

            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        }
        catch (e) {
            setLoading(false);
            console.log(e);

        }
    }

    function handleSearch() {
        fetchWeatherData(search)
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    }

    useEffect(() => {
        fetchWeatherData("Prishtina");
    }, []);
    console.log(weatherData);


    return <div>
        <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
        />
        {

            loading ? <div>Loading...</div>
                : (
                    <div className='city-name'>
                        <h2>
                            <FaLocationDot />{weatherData?.name}, <span>{weatherData?.sys.country}</span>
                        </h2>


                        <div className="date">
                            <span>{getCurrentDate}</span>
                        </div>


                        <div className='temp'>{Math.round(weatherData?.main?.temp) + "°C"}</div>
                        <p className='description'>
                            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
                        </p>


                        <div className='weather-info'>
                            <div>
                                <p>Wind Speed</p>
                                <p className='wind'>{weatherData?.wind?.speed} km/h</p>
                            </div>

                            <div>
                                <p>Humidity</p>
                                <p className='humidity'>{weatherData?.main?.humidity}%</p>
                            </div>
                        </div>
                    </div>

                )}
    </div>
}