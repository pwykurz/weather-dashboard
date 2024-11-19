import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;

  if (!city) {
    res.status(400).json({ error: 'City is required' });
    return;
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}
