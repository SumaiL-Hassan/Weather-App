import { useState } from "react"


function Search(){
    const [city, setCity] = useState(null);
    function searchCity(){
        
    }
    return(<div>
        <input type="text" placeholder="Search..." value={city}/>
        <button>Enter</button>
    </div>)

}
export default Search