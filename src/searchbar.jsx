import { useState } from "react"


function Search({weatherData}){
    const [city, setCity] = useState(null);
    
function handleSearch(){
    weatherData(city);
}

    return(<div>
        <input type="text" placeholder="Search..." value={city} onChange={(e) => setCity(e.target.value)}/>
        <button onClick={handleSearch}>Enter</button>
    </div>)

}
export default Search