import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Panel de Monitoreo</h1>
        <p className="text-gray-600 mb-6">Datos en tiempo real de tus cultivos</p>
        {/* Aquí irán las tarjetas */}
      </main>
    </div>
  );
}

export default App;
