// Login.js

import React, { useState } from 'react';
import backgroundImage from '../../assets/01.jpg';
const Home = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { userName, password });
  };

  return (
    <div className="landing-page min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome to Our Website</h1>
        
        <form className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 text-center">
          Don't have an account?{' '}
          <a className="text-blue-500 hover:underline" href="/signup">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
 
};

export default Home;
