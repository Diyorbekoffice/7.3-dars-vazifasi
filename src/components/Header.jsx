import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">My Application</h1>
        <div className="space-x-4">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'font-bold underline' : 'text-white'}> Home </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold underline' : 'text-white'}> About </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold underline' : 'text-white'}> Contact </NavLink>
          <NavLink to="/form" className={({ isActive }) => isActive ? 'font-bold underline' : 'text-white'}> Form </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
