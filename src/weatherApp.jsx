import SearchBox from "./searchBox.jsx"
import InfoBox from "./infoBox.jsx"
import {getWeatherTheme} from './getWeatherThemes.js'
import { useCurrentLocationWeatherSearch } from "./currentLocationWeather.js";

export default function WeatherApp(){
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const { weatherInfo, error, setWeatherInfo } = useCurrentLocationWeatherSearch(API_KEY);

    const theme = getWeatherTheme(weatherInfo?.description || "");

    return(
        <div className="styleWeather" style={{
            backgroundImage: `url(${theme.image})`,
            backgroundColor: theme.color,
            backgroundSize: "cover",
            marginLeft: "7rem",
            marginTop: "2rem",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "80vh",
            width: "80%", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <SearchBox setWeatherInfo={setWeatherInfo}/>
            <InfoBox infoWeather={weatherInfo}/>
        </div>
    );
}