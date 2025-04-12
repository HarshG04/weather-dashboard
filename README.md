# Weather Dashboard

A real-time weather application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to search for weather information by city name.

## Features

- Search for weather by city name
- Display current temperature, weather conditions, humidity, and wind speed
- Clean, responsive UI that works on both desktop and mobile
- Real-time data from OpenWeatherMap API


## Project Structure

```
weather-dashboard/
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # WeatherCard, SearchBar, etc.
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
├── server/ # Node.js Backend
│ ├── routes/
│ │ └── weather.js # /weather endpoint logic
│ ├── server.js
│ └── package.json
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```
git clone <repository-url>
cd weather-dashboard
```

### 2. Backend Setup

```
cd server
npm install
```


### 3. Frontend Setup

```
cd ../client
npm install
```

## Running the Application

### Start the Backend Server

```
cd server
npm start
```

The server will run on http://localhost:5000

### Start the Frontend Application

Open a new terminal window:

```
cd client
npm start
```

The React app will run on http://localhost:3000

## How to Use

1. Open your browser and go to http://localhost:3000
2. Enter a city name in the search box
3. Click the "Search" button
4. View the weather information for the specified city

## Important Notes

- The backend must be running for the application to fetch weather data
- If you get a "City not found" error, check that you spelled the city name correctly

## API Endpoints

- `GET /api/weather?city=cityname`: Returns weather data for the specified city

## Technologies Used

### Frontend
- React
- Axios for API requests
- CSS for styling

### Backend
- Node.js
- Express
- Axios for external API requests
- dotenv for environment variables
- CORS for cross-origin requests
