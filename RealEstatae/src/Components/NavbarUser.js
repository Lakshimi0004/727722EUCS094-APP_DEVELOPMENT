import React from 'react';

const NavbarUser = ({ navigateTo, isAuthenticated, user }) => {
  return (
    <div className="h-[60px] w-full fixed top-0 bg-white z-10 shadow z-20">
      <div className="h-full w-full flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2661/2661344.png"
            alt="Real Estate Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold font-montserrat text-black">
            TerraNest
          </span>
        </div>
        <div className="text-black text-lg ml-auto font-bold font-montserrat">
          <ul className="flex space-x-6">
            <li
              className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={() => navigateTo('home')}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={() => navigateTo('property')}
            >
              Properties
            </li>
            <li
              className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={() => navigateTo('agent')}
              >
              Agents
            </li>
            <li
              className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={() => navigateTo('blog')}
            >
              Blogs
            </li>
            {isAuthenticated ? (
              <li
                className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
                onClick={() => navigateTo('profile')}
              >
                Profile
              </li>
            ) : (
              <li
                className="hover:underline cursor-pointer hover:text-blue-700 transition duration-300"
                onClick={() => navigateTo('login')}
              >
                Login
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
