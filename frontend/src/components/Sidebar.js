// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#d2b48c] text-white h-screen w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'bg-coffee text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-brown-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive ? 'bg-coffee text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-brown-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-review"
            className={({ isActive }) =>
              isActive ? 'bg-coffee text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-brown-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
          >
            Add Review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'bg-coffee text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-brown-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
