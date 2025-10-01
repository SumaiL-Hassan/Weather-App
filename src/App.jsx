import Weather from './weather-app'
import './App.css'
import Display from './WeatherDisplay'
import ErrorMess from './ErrorMessage'
import Search from './searchbar'

function App() {


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
