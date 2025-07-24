interface DashboardCardProps {
  title: string;
  value: string;
  unit?: string;
  color?: string;
}

const DashboardCard = ({ title, value, unit = "", color = "text-green-700" }: DashboardCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-1/2 lg:w-1/4">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className={`text-3xl font-bold ${color}`}>
        {value} <span className="text-lg">{unit}</span>
      </p>
    </div>
  );
};

export default DashboardCard;
