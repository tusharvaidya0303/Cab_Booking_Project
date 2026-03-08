import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Navbar';


const Alogin =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const navigate=useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = { email, password };

    const result = await axios.post(
      "http://localhost:8000/api/admin/alogin",
      payload
    );

    if (result.data.Status === "Success") {
      localStorage.setItem("token", result.data.token);
      alert("Login Successful");
      navigate("/ahome");
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
};

const formHandle1 = (e) => {
  e.preventDefault();
  navigate("/asignup");
};
  return (
   <div className="min-h-screen bg-amber-100">
  <NavBar />
  
  <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 p-8 rounded-2xl mt-12 shadow-lg bg-white">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Admin Login
        </h2>
      </div>

      <form className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
            placeholder="Password"
          />
        </div>

        {/* Submit Button */}
        <div className="space-y-4">
          <button
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-800 text-white w-full py-2 px-4 rounded-md font-medium transition"
          >
            Log in
          </button>

          <p className="text-center text-sm text-gray-700">
            Don’t have an account?
          </p>

          <button
            onClick={formHandle1}
            className="bg-amber-400 hover:bg-amber-500 text-black py-2 px-4 rounded-md font-medium w-full transition"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}

export default Alogin;