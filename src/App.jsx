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

function FetchWeather(){
  
}

  return (
    <>
      
      <Weather/>
      <Search/>
      <Display/>
      <ErrorMess/>
      
    </>
    
  )
}

export default App
