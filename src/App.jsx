import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [theme, setTheme] = useState("light"); // State for theme

  const currentDate = new Date();
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const API_KEY = "b0b54b9075f9465d8eb175010240907";

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error("City not found"); // Error for invalid response
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert("Error: Please enter a valid city."); // Alert on error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Sunny":
      case "Partly sunny":
        return "src/imgs/Sun.png";
      case "Cloudy":
      case "Partly cloudy":
        return "src/imgs/Cloudy.png";
      case "Mist":
        return "src/imgs/Umberella.png";
      case "Drizzle":
      case "Showers":
        return "src/imgs/Raining.png";
      case "Thunderstorm":
        return "src/imgs/Thunder.png";
      case "Windy":
        return "src/imgs/Wind.png";
      default:
        return "src/imgs/cloud.png";
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-800 text-white"
        }`}
    >
      <button
        onClick={toggleTheme}
        className={`absolute top-3 px-4 py-2 rounded-md border ${theme === "light"
            ? "bg-gray-200 text-black hover:bg-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div
        className={`rounded-xl shadow-lg p-7 mt-6 ${theme === "light"
            ? "bg-gradient-to-b from-sky-600 to-blue-600"
            : "bg-gradient-to-b from-sky-900 to-blue-800"
          }`}
      >

        {weather && (
          <>
            <div>
              <h1 className="font-sans text-2xl font-semibold mb-5 text-opacity-70 text-center">
                {formattedDate}
              </h1>
              <h2 className="font-sans text-6xl font-bold mb-10 text-center">
                {weather.location.name}
              </h2>
              <img
                src={getWeatherIcon(weather.current.condition.text)}
                className="h-[170px] w-[250px]"
                alt="Weather Icon"
              />
              <h1 className="font-sans text-5xl font-extrabold mb-2 mt-5 text-center">
                {weather.current.temp_c}°C
              </h1>
              <h2 className="font-sans text-base font-normal text-center">
                {weather.current.condition.text}
              </h2>
              <h2 className="font-sans text-xl font-normal mb-5 text-opacity-70 text-center">
                Feels Like {weather.current.feelslike_c}°C
              </h2>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  fetchApi();
                }}
              >
                <div className="max-w-sm space-y-3 mt-10">
                  <div>
                    <label htmlFor="city-input" className="sr-only">
                      Enter City
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <input
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        id="city-input"
                        className={`py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-600 disabled:opacity-50 ${theme === "light"
                            ? "bg-white text-black"
                            : "bg-neutral-900 text-neutral-400"
                          }`}
                      />
                      <button
                        type="submit"
                        className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-sky-500 text-white hover:bg-blue-700"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;