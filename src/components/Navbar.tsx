interface NavbarProps {
  activeAlertsCount: number;
  onAlertClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeAlertsCount, onAlertClick }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-700 text-white shadow-md">
      <div className="font-bold text-xl">AgroSense</div>
      <div
        className="relative cursor-pointer hover:opacity-90"
        onClick={onAlertClick}
      >
        <span className="mr-2">Alertas</span>
        <span
          className={`absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full ${
            activeAlertsCount > 0 ? 'bg-red-600' : 'bg-green-500'
          }`}
        >
          {activeAlertsCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
