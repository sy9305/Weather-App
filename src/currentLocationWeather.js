import { useState, useEffect } from 'react';
import { fetchWeather } from "./fetchWeatherData.js";

export function useCurrentLocationWeatherSearch(apiKey) {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    const result = await fetchWeather(`${latitude},${longitude}`, API_KEY);
                    setWeatherInfo(result);
                },
              () => {
                setError("Permission denied or location unavailable.");
              }
            );
        } else {
          setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return { weatherInfo, error, setWeatherInfo };
}