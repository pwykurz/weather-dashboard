
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  switch (method) {
    case 'GET':
      try {
        const { city } = query;
        if (!city) {
          res.status(400).json({ error: 'City is required' });
          return;
        }
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        res.status(200).json(response.data);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch weather data' });
      }
      break;

    case 'POST':
      try {
        // Simulate adding a new "city"
        const newCity = body.city;
        if (!newCity) {
          res.status(400).json({ error: 'City is required' });
          return;
        }
        res.status(201).json({ message: `City ${newCity} added successfully` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add city' });
      }
      break;

    case 'PUT':
      try {
        // Simulate updating a city (placeholder logic)
        const updatedCity = body.city;
        if (!updatedCity) {
          res.status(400).json({ error: 'City is required' });
          return;
        }
        res.status(200).json({ message: `City ${updatedCity} updated successfully` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to update city' });
      }
      break;

    case 'DELETE':
      try {
        // Simulate deleting a city (placeholder logic)
        const cityToDelete = query.city;
        if (!cityToDelete) {
          res.status(400).json({ error: 'City is required' });
          return;
        }
        res.status(200).json({ message: `City ${cityToDelete} deleted successfully` });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete city' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
