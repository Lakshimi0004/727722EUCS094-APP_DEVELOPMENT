import './App.css';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import Login from './Components/Login';

import Profile from './Components/Profile';
import Properties from './Components/Properties';
import AgentsList from './Components/AgentsList';
import Blog from './Components/Blog';
import NavbarUser from './Components/NavbarUser';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Redirect to login if trying to access restricted pages without authentication
    if (!isAuthenticated && currentPage !== 'home' && currentPage !== 'login') {
      setCurrentPage('login');
    }
  }, [isAuthenticated, currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setCurrentPage(userData.userType === 'agent' ? 'agentProfile' : 'profile');
  };

  const updateUser = (updatedData) => {
    setUser(updatedData);
  };

  return (
    <div className="pt-12">
      <NavbarUser navigateTo={navigateTo} isAuthenticated={isAuthenticated} user={user} />
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'property' && <Properties navigateTo={navigateTo} />}
      {currentPage === 'agent' && <AgentsList navigateTo={navigateTo} />}
      {currentPage === 'blog' && <Blog navigateTo={navigateTo} />}
      {currentPage === 'login' && <Login navigateTo={navigateTo} onLogin={handleLogin} />}
      {currentPage === 'profile' && <Profile user={user} updateUser={updateUser} />}
      {currentPage === 'agentProfile' && <Profile user={user} updateUser={updateUser} />} {/* Add agent profile if needed */}
    </div>
  );
}
