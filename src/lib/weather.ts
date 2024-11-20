import axios from 'axios';

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`/api/weather?city=${city}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch weather data');
  }
};
