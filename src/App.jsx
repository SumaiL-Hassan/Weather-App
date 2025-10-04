import Weather from './weather-app'
import './App.css'
import Display from './WeatherDisplay'
import ErrorMess from './ErrorMessage'
import Search from './searchbar'
import { useState } from 'react'

function App() {
 const [search, setSearch] = useState("") //for searching 
  const [weather, setWeather] = useState(null) //
  const [display, setDisplay] = useState(false) // for fetch
  const [error, setError] = useState (null) //for errors 


async function fetchWeather(city) {
  setDisplay(true)
  
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70adcf4f0fea4c149da378190db40d86`);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  } catch{
    setError("Fail to fetch");
  }
  
  setDisplay(false)
}


  return (
    <>
      
      {weather && <Weather weather={weather}/>}
      <Search weatherData = {fetchWeather}/>
      {error && <ErrorMess error={error}/>}
      
    </>
    
  )
}

export default App
