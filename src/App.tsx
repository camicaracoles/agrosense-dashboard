import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Panel de Monitoreo</h1>
        <p className="text-gray-600 mb-6">Datos en tiempo real de tus cultivos</p>

        <div className="flex flex-wrap gap-4">
          <DashboardCard title="Temperatura" value="25" unit="°C" />
          <DashboardCard title="Humedad" value="65" unit="%" />
          <DashboardCard title="Consumo Agua" value="1200" unit="L" />
          <DashboardCard title="Alertas Activas" value="2" color="text-red-600" />
        </div>
      </main>
    </div>
  );
}

export default App;
