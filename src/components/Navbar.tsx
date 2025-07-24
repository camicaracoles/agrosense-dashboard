const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <div className="text-green-700 font-bold text-xl">AgroSense 🌱</div>
            <div className="space-x-4">
                <button className="text-gray-600 hover:text-green-700">Dashboard</button>
                <button className="text-gray-600 hover:text-green-700">Alertas</button>
                <button className="text-gray-600 hover:text-green-700">Configuración</button>
            </div>
        </nav>
    );
};

export default Navbar;
