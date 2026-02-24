import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-50 relative">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden relative">
        <Navbar />

        {/* Decorative Background layer */}
        <div className="absolute inset-0 z-0 bg-grid-pattern bg-radial-glow pointer-events-none opacity-60"></div>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
