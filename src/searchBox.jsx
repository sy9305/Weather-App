import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { fetchWeather } from "./fetchWeatherData.js";


export default function searchBox({ setWeatherInfo }){
    const [city, setCity] = useState("");
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await fetchWeather(city, API_KEY);
            setWeatherInfo(result);
        } catch (error) {
            alert("Could not fetch weather.");
        }
        setCity("");
    };

    const handleInputChange = ( event ) => {
        setCity(event.target.value);
    };
    

    return(
        <div>
            <h1>Search for the Weather</h1>
            <form action="" onSubmit={handleSubmit}>
                <TextField 
                    id="city"
                    label="Enter city name"
                    variant="outlined" name="city"
                    value={city}
                    onChange={handleInputChange} 
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        borderRadius: "6px",
                        width: "70%",
                        }}
                    required/><br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}