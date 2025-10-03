import Weather from './weather-app'
import './App.css'
import Display from './WeatherDisplay'
import ErrorMess from './ErrorMessage'
import Search from './searchbar'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState(null)
  const [display, setDisplay] = useState(false)
  const [error, setError] = useState (null)


async function fetchWeather(city) {
  setDisplay(true)
  
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70adcf4f0fea4c149da378190db40d86`);
    const data = await response.json();
    setWeather(data)
  } catch{
    setError("Fail to fetch");
  }
  
  setDisplay(false)
}

  return (
    <>
      
      {weather && <Weather weather={weather}/>}
      <Search weatherData = {fetchWeather}/>
      {display && <Display /> } 
      {error && <ErrorMess error={error}/>}
      
    </>
    
  )
}

export default App
