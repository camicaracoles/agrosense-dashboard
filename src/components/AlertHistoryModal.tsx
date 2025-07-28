interface AlertHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  alerts: { timestamp: string; message: string }[];
}

const AlertHistoryModal = ({ isOpen, onClose, alerts }: AlertHistoryModalProps) => {
  if (!isOpen) return null;

  // Protege si alerts es undefined
  const safeAlerts = alerts || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-96" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">Historial de Alertas</h2>
        {safeAlerts.length === 0 ? (
          <p className="text-gray-500">No hay alertas registradas.</p>
        ) : (
          <ul className="max-h-60 overflow-y-auto space-y-2">
            {safeAlerts.map((alert, index) => (
              <li key={index} className="bg-gray-100 rounded-md p-2 text-sm">
                <strong>{alert.timestamp}</strong>: {alert.message}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default AlertHistoryModal;
