import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-surface-200 z-30 sticky top-0">
      <div className="w-full px-6 md:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center">
            {/* Keeping spacing if any mobile menu toggles are added later */}
            <h1 className="text-lg font-semibold text-surface-900 hidden sm:block">
              {location.pathname === '/profile' ? 'Profile Settings' : 'Task Overview'}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-surface-900 leading-none">{user?.name}</p>
                <p className="text-xs text-surface-500 mt-1">{user?.email}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold border border-primary-200">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>

            <div className="h-6 w-px bg-surface-200 mx-2"></div>

            <button
              onClick={handleLogout}
              className="text-surface-500 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-100"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
