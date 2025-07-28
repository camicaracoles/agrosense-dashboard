import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import WeatherChart from "./components/WeatherChart";
import AIChat from "./components/AIChat";
import AlertHistoryModal from "./components/AlertHistoryModal"; // Asegúrate de importarlo
import { getSensorData } from './services/weatherApi';
import type { SensorData } from './services/weatherApi';

function App() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [alertHistory, setAlertHistory] = useState<{ timestamp: string; message: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    const data = await getSensorData();
    setSensorData(data);

    if (data.alerts > 0) {
      const newAlert = {
        timestamp: new Date().toLocaleString(),
        message: "Alerta activa detectada en sensor de temperatura",
      };
      setAlertHistory((prev) => [newAlert, ...prev]);
    }
  };

  useEffect(() => {
    fetchData(); // Carga inicial

    const interval = setInterval(fetchData, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Panel de Monitoreo</h1>
        <p className="text-gray-600 mb-6">Datos en tiempo real de tus cultivos</p>

        {!sensorData ? (
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
            <AIChat /> {/* Widget de Predicción IA */}
          </>
        )}

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 mt-6"
        >
          Ver Historial de Alertas
        </button>
      </main>

      {/* Modal de Alertas */}
      <AlertHistoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        alerts={alertHistory ?? []}
      />
    </div>
  );
}

export default App;
