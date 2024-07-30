// Navbar.js
import React from 'react';
import NavbarAgent from './NavbarAgent';
import NavbarUser from './NavbarUser';

const Navbar = ({ navigateTo, isAuthenticated, user }) => {
  if (!isAuthenticated) {
    return null; // Render nothing if not authenticated or you can have a default navbar
  }

  // Render different Navbar based on user type
  return user.userType === 'agent' ? (
    <NavbarAgent navigateTo={navigateTo} />
  ) : (
    <NavbarUser navigateTo={navigateTo} />
  );
};

export default Navbar;
