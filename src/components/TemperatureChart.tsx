
import { Line } from 'react-chartjs-2';

type TemperatureChartProps = {
  labels: string[];
  data: number[];
};

const TemperatureChart = ({ labels, data }: TemperatureChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default TemperatureChart;
