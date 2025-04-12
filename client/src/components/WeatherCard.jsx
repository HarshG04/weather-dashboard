import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { city, country, temperature, humidity, weather, wind } = weatherData;
  
  // Weather icon URL from OpenWeatherMap
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}, {country}</h2>
        <div className="weather-icon">
          <img src={iconUrl} alt={weather.description} />
        </div>
      </div>
      
      <div className="weather-info">
        <div className="temperature">
          <span className="temp-value">{Math.round(temperature)}°C</span>
          <span className="weather-description">{weather.description}</span>
        </div>
        
        <div className="weather-details">
          <div className="detail">
            <span className="label">Humidity</span>
            <span className="value">{humidity}%</span>
          </div>
          <div className="detail">
            <span className="label">Wind Speed</span>
            <span className="value">{wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; 