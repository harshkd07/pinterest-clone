import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({user}) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center mr-5 gap-1">
          <img
            src="https://static-00.iconduck.com/assets.00/pinterest-icon-2048x2048-d7p0u7c5.png"
            alt="Logo"
            className="h-6 md:mr-2 rounded-full"
          /><span className="text-red-500 text-xl font-bold">Pinterest</span>
        </Link>

        <div className="flex items-center space-x-4 w-[200px]">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/create" className="text-gray-700 hover:text-gray-900">Create</Link>
            <Link to="/account" className="w-8 h-8 bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 flex items-center justify-center">{user.name.slice(0, 1).toUpperCase()}</Link>

        </div>
      </div>
    </div>
  );
};
