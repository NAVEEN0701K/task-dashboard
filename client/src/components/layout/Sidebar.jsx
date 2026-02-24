import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="w-64 bg-surface-900 text-white hidden md:flex flex-col border-r border-surface-800">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
          <Target size={20} className="text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">FocusBoard</h2>
      </div>

      <div className="px-4 py-4 flex-1">
        <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-4 px-2">
          Menu
        </div>
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${isActive
                    ? 'bg-primary-600/10 text-primary-400 font-medium'
                    : 'text-surface-300 hover:bg-surface-800 hover:text-white'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-r-full"
                  />
                )}
                <Icon size={20} className={`${isActive ? 'text-primary-400' : 'text-surface-400 group-hover:text-surface-200'} transition-colors duration-200`} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
