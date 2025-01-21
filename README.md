# Weather App with Dark/Light Mode

This is a simple Weather App built using React and Vite. The app allows users to check the current weather for any city, toggle between dark and light modes, and displays an error message if an invalid city is entered.

---

## Features

- **Weather Information**: Displays the current temperature, weather condition, and "feels like" temperature for the entered city.
- **Dark/Light Mode**: Users can toggle between light and dark themes for better accessibility and aesthetics.
- **Error Handling**: Alerts the user if an invalid city name is entered.
- **Date Display**: Shows the current date in a user-friendly format.
- **Dynamic Weather Icons**: Displays different weather icons based on the current weather condition.

---

## Technologies Used

- **React**: For building the user interface.
- **Vite**: As the build tool and development server.
- **WeatherAPI**: To fetch real-time weather data.
- **TailwindCSS**: For styling and responsive design.

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/sehajbajaj2004/Weather-React.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local development server URL (usually `http://localhost:5173`).

---

## Configuration

### WeatherAPI Key

1. Go to [WeatherAPI](https://www.weatherapi.com/) and create a free account to get your API key.
2. Replace the placeholder `API_KEY` in the `App.js` file with your actual API key:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

---

## How to Use

1. Enter a city name in the input box and press the **search button**.
2. View the current weather information, including temperature, weather condition, and "feels like" temperature.
3. Use the **Toggle Theme** button in the top-right corner to switch between light and dark modes.
4. If an invalid city name is entered, an alert will appear notifying you to enter a valid city.

---

## Project Structure

```
weather-app/
├── src/
│   ├── assets/       # Empty folder for additional assets
│   ├── imgs/         # Contains weather icons
│   ├── App.js        # Main application component
│   ├── index.js      # Entry point for React
│   ├── App.css       # Custom styles (optional)
├── vite.config.js    # Vite configuration
├── package.json
└── README.md         # Project documentation
```

---

## Future Enhancements

- Add support for displaying hourly or weekly forecasts.
- Integrate a location-based weather feature using geolocation.
- Add animations for theme transitions and weather icons.

---

## Author

- **Sehaj Bajaj**
- [GitHub Profile](https://github.com/sehajbajaj2004)
- [Weather App Repository](https://github.com/sehajbajaj2004/Weather-React)
