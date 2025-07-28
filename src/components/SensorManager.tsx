import React, { useState } from 'react';

interface Sensor {
  id: number;
  name: string;
  type: string;
  location: string;
}

const SensorManager: React.FC = () => {
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const [form, setForm] = useState({ name: '', type: '', location: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      // Editar sensor existente
      setSensors(sensors.map(s => (s.id === editingId ? { id: editingId, ...form } : s)));
      setEditingId(null);
    } else {
      // Agregar sensor nuevo
      const newSensor: Sensor = { id: Date.now(), ...form };
      setSensors([...sensors, newSensor]);
    }
    setForm({ name: '', type: '', location: '' });
  };

  const handleEdit = (sensor: Sensor) => {
    setForm({ name: sensor.name, type: sensor.type, location: sensor.location });
    setEditingId(sensor.id);
  };

  const handleDelete = (id: number) => {
    setSensors(sensors.filter(s => s.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ name: '', type: '', location: '' });
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Gestión de Sensores</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            name="type"
            placeholder="Tipo"
            value={form.type}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            name="location"
            placeholder="Ubicación"
            value={form.location}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700"
          >
            {editingId ? 'Guardar Cambios' : 'Agregar Sensor'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ name: '', type: '', location: '' });
              }}
              className="border px-4 py-2 rounded-md shadow-md hover:bg-gray-100"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Tabla de sensores */}
      <div className="bg-white shadow-md rounded-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Ubicación</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sensors.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No hay sensores registrados.
                </td>
              </tr>
            ) : (
              sensors.map(sensor => (
                <tr key={sensor.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{sensor.name}</td>
                  <td className="px-4 py-2">{sensor.type}</td>
                  <td className="px-4 py-2">{sensor.location}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(sensor)}
                      className="text-blue-600 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(sensor.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SensorManager;
