import React, { useState } from "react";
import axios from "axios";

const Loginn = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('user'); // 'user' or 'agent'

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:8181/${userType}s?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        onLogin(response.data[0]);
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
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg">
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
          placeholder="Password"
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
  );
};

export default Loginn;
