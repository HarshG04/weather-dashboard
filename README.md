# Real-Time Weather Dashboard

A full-stack MERN application that displays real-time weather data from the OpenWeatherMap API.

## Project Structure

```
weather-dashboard/
├── client/ # React Frontend
│   ├── src/
│   │   ├── components/ # WeatherCard, SearchBar components
│   │   ├── App.js      # Main application component
│   │   └── App.css     # Styles for the application
│   └── package.json    # Frontend dependencies
├── server/ # Node.js Backend
│   ├── routes/
│   │   └── weather.js  # /api/weather endpoint logic
│   ├── server.js       # Express server setup
│   ├── .env            # Environment variables
│   └── package.json    # Backend dependencies
└── README.md           # Project documentation
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenWeatherMap API key (get one at https://openweathermap.org/appid)

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file and add your OpenWeatherMap API key:
   ```
   PORT=5000
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Features

- Search for weather by city name
- Display current temperature, weather conditions, humidity, and wind speed
- Responsive design that works on desktop and mobile devices
- Error handling for invalid city names or API issues

## Technologies Used

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express
- **API:** OpenWeatherMap API 