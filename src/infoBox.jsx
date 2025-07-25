import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({infoWeather}) {
    
  return (
    <Card sx={{ maxWidth: 500 }} style={{marginTop: "1rem"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {infoWeather?.city}, {infoWeather?.state}{infoWeather?.state && <span>,</span>} {infoWeather?.country}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p><b>Temperature</b> = {infoWeather?.temp}&deg;C</p>
          <p><b>Wind Speed</b> = {infoWeather?.windSpeed} km/hr</p>
          <p><b>Humidity</b> = {infoWeather?.humidity}%</p>
          <p>Weather can be describe as <i>{infoWeather?.description}</i> and feels like {infoWeather?.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
