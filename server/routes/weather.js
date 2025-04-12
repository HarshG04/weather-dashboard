const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * GET /api/weather
 * Get weather information for a specific city
 */
router.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    
    // Validate city parameter
    if (!city) {
      return res.status(400).json({ message: 'City parameter is required' });
    }
    
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ message: 'OpenWeatherMap API key is not configured' });
    }
    
    // Make request to OpenWeatherMap API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a89f85a405f693f12ba820cbd7ae6ce&units=metric`;
    // console.log(apiKey);

    const response = await axios.get(url);  
    
    // Extract relevant weather data
    const weatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      weather: {
        main: response.data.weather[0].main,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon
      },
      wind: {
        speed: response.data.wind.speed,
        deg: response.data.wind.deg
      }
    };
    
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error.message);
    
    // Handle different types of errors
    if (error.response) {
      // OpenWeatherMap API error
      if (error.response.status === 404) {
        return res.status(404).json({ message: 'City not found' });
      }
      return res.status(error.response.status).json({ message: error.response.data.message || 'Error fetching weather data' });
    }
    
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 