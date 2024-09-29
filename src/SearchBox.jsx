
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false)
    let [showInfoBox, setshowInfoBox] = useState(false);


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e01c4bca9868a8322838b70b58f1b193";

    let  getWeatherInfo = async ()=>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let jsonResponse =    await response.json()
            console.log(jsonResponse)
       
            let result = {
               city:jsonResponse.name,
               tempMin:jsonResponse.main.temp_min,
               tempMax:jsonResponse.main.temp_max,
               humidity:jsonResponse.main.humidity,
               feels_Like:jsonResponse.main.feels_like,
               weather:jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        } catch(error){
throw error;


        }

    }

    let handleChange = (event)=>{
        setcity(event.target.value)
    }

    let handleSubmit = async (event)=>{
        
        
        event.preventDefault();
        console.log(city);
        setshowInfoBox(false);
        setcity("");
        try{
        let newinfo = await  getWeatherInfo();
      updateInfo(newinfo);
      setshowInfoBox(true);
      }catch(error){
        seterror(true)
        setshowInfoBox(false)

      }
      seterror(false)

    }
    return(
        <div className='SearchBox'>

            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} value={city}  required />
            <br />
            <br />
            <Button type='submit' variant="contained">
        Search
      </Button>
    {error && <p style={{color:"red"}}>no such place exist</p>}
            </form>
            <div id="infoBox" className={showInfoBox ? 'show' : ''}>
            </div>
        </div>
    )
}