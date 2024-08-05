import React, { useState } from "react";
import Navbar from "./NavbarUser";
import axios from "axios";

const Login = ({ navigateTo, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('user'); 

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:8181/${userType}s?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        onLogin(response.data[0]);
        navigateTo(userType === 'user' ? 'profile' : 'agentProfile'); 
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      const newUser = { name, email, password, profession: "New User", company: "New Company" };
      const response = await axios.post(`http://localhost:8181/${userType}s`, newUser);
      onLogin(response.data);
      navigateTo(userType === 'user' ? 'profile' : 'agentProfile'); 
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')`,
      }}
    >
      <div className="h-full w-full bg-black bg-opacity-50">
        <Navbar navigateTo={navigateTo} />
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {isLogin ? `Login as ${userType === 'user' ? 'User' : 'Agent'}` : `Sign Up as ${userType === 'user' ? 'User' : 'Agent'}`}
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;
                if (isLogin) {
                  handleLogin(email, password);
                } else {
                  const name = e.target.name.value;
                  handleSignup(name, email, password);
                }
              }}
            >
              {!isLogin && (
                <input
                  name="name"
                  type="text"
                  placeholder={`Your ${userType === 'user' ? 'Name' : 'Agency Name'}`}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
              <input
                name="email"
                type="email"
                placeholder={`Your ${userType === 'user' ? 'Email' : 'Agency Email'}`}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                name="password"
                type="password"
                placeholder={`Password`}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                {isLogin ? `Login as ${userType === 'user' ? 'User' : 'Agent'}` : `Sign Up as ${userType === 'user' ? 'User' : 'Agent'}`}
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                {isLogin ? `Don't have an account? Sign Up as ${userType === 'user' ? 'Agent' : 'User'}` : `Already have an account? Login as ${userType === 'user' ? 'Agent' : 'User'}`}
              </button>
              <div className="mt-2">
                <button
                  onClick={() => setUserType(userType === 'user' ? 'agent' : 'user')}
                  className="text-blue-500 hover:underline"
                >
                  Switch to {userType === 'user' ? 'Agent' : 'User'} Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
