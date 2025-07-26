import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import type { FC } from 'react';

// Registrar los componentes de ChartJS
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

interface WeatherChartProps {
  history: number[];
}

const WeatherChart: FC<WeatherChartProps> = ({ history }) => {
  const data = {
    labels: history.map((_, i) => `Día ${i + 1}`),
    datasets: [
      {
        label: 'Temperatura',
        data: history,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

export default WeatherChart;
