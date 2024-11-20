import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WeatherCard from '@/components/WeatherCard';
import TemperatureChart from "@/components/TemperatureChart";
import { fetchWeatherData } from "@/lib/weather";

// Define types for weather data
type WeatherCondition = {
  main: string;
  description: string;
};

type ForecastItem = {
  dt: number;
  main: {
    temp: number;
  };
  weather: WeatherCondition[];
};

type CityInfo = {
  name: string;
};

type WeatherData = {
  city: CityInfo;
  list: ForecastItem[];
};

const Home = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    if (!city) return;

    try {
      const data: WeatherData = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getChartData = () => {
    if (!weather?.list) return { labels: [], data: [] };

    // Extract forecast data for the next 12 hours
    const labels = weather.list.map((hour) =>
      new Date(hour.dt * 1000).toLocaleString([], {
        weekday: 'long', // Full weekday name (e.g., "Monday")
        day: 'numeric', // Day of the month (e.g., "18")
        hour: '2-digit', // Two-digit hour (e.g., "10")
        minute: '2-digit', // Two-digit minute (e.g., "30")
      })
    );
    const data = weather.list.map((hour) => hour.main.temp);

    return { labels, data };
  };

  const { labels, data } = getChartData();

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
            required
          />
          <button onClick={handleSearch} className="bg-blue-600 text-white p-2 ml-2 rounded">
            Search
          </button>
        </div>
        {weather && (
          <div>
            <WeatherCard
              city={weather.city.name}
              temperature={Math.round(weather.list[0].main.temp)}
              description={weather.list[0].weather[0].description}
            />
            <div className="mt-6">
              <h2 className="text-xl font-bold">Temperature Forecast</h2>
              <TemperatureChart labels={labels} data={data} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
