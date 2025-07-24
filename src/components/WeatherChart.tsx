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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

interface WeatherChartProps {
  history: number[];
}

const WeatherChart: FC<WeatherChartProps> = ({ history }) => {
  // Validación: si history no tiene datos, muestra mensaje
  if (!history || history.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full mt-6">
        <h2 className="text-lg font-bold text-green-700 mb-4">Evolución de Temperatura</h2>
        <p className="text-gray-500">No hay datos disponibles.</p>
      </div>
    );
  }

  const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  // Si history.length < labels.length, rellenamos con nulls
  const dataPadded = [...history];
  while (dataPadded.length < labels.length) {
    dataPadded.push(NaN);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: dataPadded,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full mt-6">
      <h2 className="text-lg font-bold text-green-700 mb-4">Evolución de Temperatura</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
