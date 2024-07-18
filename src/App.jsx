import { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

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
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
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

  return (
    <div className="bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="bg-gradient-to-b from-sky-600 to-blue-600 rounded-xl shadow-lg p-20">
        {weather && (
          <>
            <div>
              <h1 className="font-sans text-2xl text-white font-semibold mb-5 text-opacity-70">
                {formattedDate}
              </h1>
              <h2 className="font-sans text-6xl text-white font-bold mb-10">
                {weather.location.name}
              </h2>
              <img
                src={getWeatherIcon(weather.current.condition.text)}
                className="h-[170px] w-[250px]"
                alt=""
              />
              <h1 className="font-sans text-5xl text-white font-extrabold mb-2 mt-5">
                {weather.current.temp_c}°C
              </h1>
              <h2 className="font-sans text-base text-white font-normal">
                {weather.current.condition.text}
              </h2>
              <h2 className="font-sans text-xl text-white font-normal mb-5 text-opacity-70">
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
                    <label
                      htmlFor="hs-trailing-button-add-on-with-icon"
                      className="sr-only"
                    >
                      Label
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <input
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        id="hs-trailing-button-add-on-with-icon"
                        name="hs-trailing-button-add-on-with-icon"
                        className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none light:bg-neutral-900 light:border-neutral-700 light:text-neutral-400 light:placeholder-neutral-500 light:focus:ring-neutral-600"
                      />
                      <button
                        type="submit"
                        className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-sky-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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

//added a note

export default App;
