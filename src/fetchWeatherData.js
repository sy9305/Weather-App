export async function fetchWeather(query, apiKey) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
    const weatherResponse = await fetch(url);

    if (!weatherResponse) {
        throw new Error("Failed to fetch weather data");
    }

    const jsonWeatherResponse = await weatherResponse.json();

    return {
        temp : jsonWeatherResponse.current.temp_c,
        humidity : jsonWeatherResponse.current.humidity,
        description : jsonWeatherResponse.current.condition.text,
        windSpeed : jsonWeatherResponse.current.wind_kph,
        feelsLike : jsonWeatherResponse.current.feelslike_c,
        icon: jsonWeatherResponse.current.condition.icon,
        city: jsonWeatherResponse.location.name,
        state: jsonWeatherResponse.location.region,
        country: jsonWeatherResponse.location.country,
    };
}
