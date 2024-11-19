
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WeatherCard from '@/components/WeatherCard';
import { fetchWeatherData } from '@/lib/weather';

const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded"
          />
          <button onClick={handleSearch} className="bg-blue-600 text-white p-2 ml-2 rounded">
            Search
          </button>
        </div>
        {weather && (
          <div className="mt-6">
            <WeatherCard
              city={weather.name}
              temperature={Math.round(weather.main.temp)}
              description={weather.description}
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">Forecast:</h3>
              <ul>
                  <li className="p-2 border-b">
                    {weather.main.temp}°C - {weather.weather[0].description}
                  </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
