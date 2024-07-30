import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAgent = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">RealEstate Portal</div>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link to="/my-properties" className="hover:bg-gray-700 p-2 rounded">My Properties</Link>
          <Link to="/leads" className="hover:bg-gray-700 p-2 rounded">Leads</Link>
          <Link to="/appointments" className="hover:bg-gray-700 p-2 rounded">Appointments</Link>
          <Link to="/messages" className="hover:bg-gray-700 p-2 rounded">Messages</Link>
          <Link to="/reports" className="hover:bg-gray-700 p-2 rounded">Reports</Link>
          <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Account Settings</Link>
          <Link to="/support" className="hover:bg-gray-700 p-2 rounded">Help & Support</Link>
        </div>
        <button className="bg-red-600 hover:bg-red-500 p-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default NavbarAgent;
