import React from 'react';

interface AlertHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  alerts: { timestamp: string; message: string }[];
}

const AlertHistoryModal: React.FC<AlertHistoryModalProps> = ({ isOpen, onClose, alerts }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Historial de Alertas</h2>
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>X</button>
        
        {alerts.length === 0 ? (
          <p>No hay alertas registradas.</p>
        ) : (
          <ul className="space-y-3">
            {alerts.map((alert, index) => (
              <li key={index} className="p-3 bg-red-100 rounded-md">
                <p className="text-sm font-semibold">{alert.timestamp}</p>
                <p className="text-sm">{alert.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AlertHistoryModal;