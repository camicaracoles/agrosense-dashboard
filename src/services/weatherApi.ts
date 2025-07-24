export interface SensorData {
  temperature: number;
  humidity: number;
  waterUsage: number;
  alerts: number;
  history: number[];
}

export const getSensorData = (): Promise<SensorData> => {
  return new Promise((resolve) => {
    resolve({
      temperature: 22 + Math.floor(Math.random() * 8),
      humidity: 60 + Math.floor(Math.random() * 15),
      waterUsage: 1000 + Math.floor(Math.random() * 500),
      alerts: Math.random() > 0.8 ? 1 : 0,
      history: Array.from({ length: 7 }, () => 22 + Math.floor(Math.random() * 8)),
    });
  });
};
