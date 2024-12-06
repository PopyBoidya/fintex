import  { useState } from 'react';
import { FaBars, FaTimes, FaSignOutAlt, FaChartLine, FaWallet, FaExchangeAlt,  FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar} className="text-white hover:text-gray-200 transition duration-200">
            <FaTimes size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded transition duration-200"><FaChartLine className="mr-3" /> Home</a></li>
            <li><a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded transition duration-200"><FaExchangeAlt className="mr-3" /> Transactions</a></li>
            <li><a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded transition duration-200"><FaChartLine className="mr-3" /> Analytics</a></li>
            <li><a href="#" className="flex items-center py-2 px-4 hover:bg-blue-700 rounded transition duration-200"><FaCog className="mr-3" /> Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-200">
              <FaBars size={24} />
            </button>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full object-cover border-2 border-blue-500"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200">Profile</a>
                  
                  <Link to='/' className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-3xl font-medium text-gray-700 mb-6">Welcome back, John!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <FaWallet className="h-8 w-8 text-white" />
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">$30,000</h4>
                    <div className="text-gray-500">Available Balance</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                    <FaChartLine className="h-8 w-8 text-white" />
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">$15,000</h4>
                    <div className="text-gray-500">Total Invested</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                    <FaExchangeAlt className="h-8 w-8 text-white" />
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">30</h4>
                    <div className="text-gray-500">Total Transactions</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Deposit
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Withdraw
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Invest
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;