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
├── server/ # Node.js Backend
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

Update the `.env` file with your OpenWeatherMap API key:

```
PORT=5000
OPENWEATHER_API_KEY=your_api_key_here
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
- You must use a valid OpenWeatherMap API key in the .env file
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

## Troubleshooting

If you encounter any issues:

1. Make sure both the server and client are running
2. Check that your OpenWeatherMap API key is valid
3. Ensure you're using Node.js v14 or higher
4. Verify that the ports 3000 and 5000 are not being used by other applications

## License

This project is open source and available under the [MIT License](LICENSE). 