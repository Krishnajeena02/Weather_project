import SearchBox from './SearchBox';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp(){
const [weather,setweather] = useState(null)
const [error, setError] = useState(false);

let updateInfo = (newinfo)=>{
if(newinfo){
    setweather(newinfo);
    setError(false);


}
else{
    setweather(null);
    setError(true);
}
}

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <br />
            {weather && <InfoBox info={weather} />}
            {error && <p style={{ color: "red" }}>No such place exists</p>}
        </div>
    )
}