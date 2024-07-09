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
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const getWeatherIcon = (main) =>{
    switch (main) {
      case "Sunny":
        return "src/imgs/Sun.png"
      case "Partly sunny":
        return "src/imgs/Sun.png"
      case "Cloudy":
        return "src/imgs/Cloudy.png"
      case "Partly cloudy":
        return "src/imgs/Cloudy.png"
      case "Mist":
        return "src/imgs/Umberella.png"
      case "Drizzle":
        return "src/imgs/Raining.png"
      case "Showers":
        return "src/imgs/Raining.png"
      case "Thunderstorm":
        return "src/imgs/Thunder.png"
      case "Windy":
        return "src/imgs/Wind.png"
      default:
        return "src/imgs/cloud.png"
    }
  }

  return (
    <>
      <div className='bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <div className='bg-gradient-to-b from-cyan-300 to-sky-600 rounded-xl shadow-lg p-40'>
          {weather && (
            <>
              <div>
                <h1 className='text-white-10 font-sans'>{formattedDate}</h1>
                <h2>{weather.location.name}</h2>
                <img src={getWeatherIcon(weather.current.condition.text)} className='h-[170px] w-[250px]' alt="" />
                <h1>{weather.current.temp_c}</h1>
                <h2>{weather.current.condition.text}</h2>
                <h2>Feels Like {weather.current.feelslike_c}</h2>
                <form onSubmit={(event) => {
                  event.preventDefault();
                  fetchApi();
                }}>
                  <input type="text" placeholder='Enter City Name' onChange={(event) => { setCity(event.target.value) }} />
                  <button type='Submit'>Get</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
