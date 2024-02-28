import React, { useState } from 'react';
import './App.css'
// import { NotFound } from './components/search/Search.jsx';
import Weather from './components/weather/Weather.jsx';

function App() {
  // const [inputValue, setInputValue] = useState('');

  // const handleSearch = (value) => {
  //   console.log(value)
  //   setInputValue(event);

  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${APIKey}`)
  //   .then(response => response.json())
  //   .then(json => {
  //     if (json.cod === '404') {
  //       return <NotFound />;
  //     }

  //   });
  // };

  return (
    <div className="App">
      {/* <Search handleChange={() => handleSearch(event)}/> */}
      
      <Weather />
    </div>
  );
}

export default App
