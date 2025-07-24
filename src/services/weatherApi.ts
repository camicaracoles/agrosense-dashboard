export interface SensorData {
  temperature: number;
  humidity: number;
  waterUsage: number;
  alerts: number;
  history: number[];
}

export const getSensorData = (): Promise<SensorData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 22 + Math.floor(Math.random() * 8), // 22°C - 30°C
        humidity: 60 + Math.floor(Math.random() * 15),    // 60% - 75%
        waterUsage: 1000 + Math.floor(Math.random() * 500), // 1000L - 1500L
        alerts: Math.random() > 0.8 ? 1 : 0,  // 20% chance de alerta activa
        history: Array.from({ length: 7 }, () => 22 + Math.floor(Math.random() * 8)),
      });
    }, 1000); // Simula 1 segundo de carga
  });
};
