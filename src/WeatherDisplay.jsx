function Display({weather}){
    const data = {
        name: weather.name,
        temp: weather.main.temp,
        

    }
    const temCel = (weather.main.temp -273.15).toFixed(1);
    return(<div>
    <h2>{data.name}</h2>
    <p>Temperature: {temCel}</p>
    <p></p>
  </div>)
}
export default Display