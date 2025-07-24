import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import WeatherChart from "./components/WeatherChart";
import { getSensorData } from './services/weatherApi';
import type { SensorData } from './services/weatherApi';


function App() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await getSensorData();
    setSensorData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    // Actualiza datos cada 10 segundos
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Panel de Monitoreo</h1>
        <p className="text-gray-600 mb-6">Datos en tiempo real de tus cultivos</p>

        {loading || !sensorData ? (
          <p>Cargando datos...</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-4">
              <DashboardCard title="Temperatura" value={sensorData.temperature.toString()} unit="°C" />
              <DashboardCard title="Humedad" value={sensorData.humidity.toString()} unit="%" />
              <DashboardCard title="Consumo Agua" value={sensorData.waterUsage.toString()} unit="L" />
              <DashboardCard title="Alertas Activas" value={sensorData.alerts.toString()} color={sensorData.alerts > 0 ? "text-red-600" : "text-green-700"} />
            </div>

            <WeatherChart history={sensorData.history} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
