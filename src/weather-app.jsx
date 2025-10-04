
function Weather({weather}){

function handleButton(){
  console.log("button clicked");
  console.log("City", city);
  setSearch(city);
}
    return(<div>
        <button onClick={handleButton}>
            <h1>Weather Heck </h1>
        </button>
    </div>)
}
export default Weather