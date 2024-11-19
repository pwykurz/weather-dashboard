
type WeatherCardProps = {
  city: string;
  temperature: number;
  description: string;
};

const WeatherCard = ({ city, temperature, description }: WeatherCardProps) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center">
    <h2 className="text-xl font-bold">{city}</h2>
    <p className="text-2xl">{temperature}°C</p>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default WeatherCard;
