import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Navbar';


const Aregister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = { name, email, password };

    await axios.post(
      "http://localhost:8000/api/admin/aregister",
      payload
    );

    alert("Account Created Successfully");
    navigate("/alogin");

  } catch (err) {
    console.error(err);
    alert("Failed to create account");
  }
};

    return (
       <div className="min-h-screen bg-amber-100">
  <NavBar />

  <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 p-8 rounded-2xl mt-8 shadow-lg bg-white">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Admin Register
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
            placeholder="Name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
            placeholder="Email address"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
            placeholder="Password"
            required
          />
        </div>

        {/* Submit & Login Button */}
        <div className="space-y-4">
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white w-full py-2 px-4 rounded-md font-medium transition"
          >
            Signup
          </button>

          <p className="text-center text-sm text-gray-700">
            Already have an account?
          </p>

          <button
            onClick={() => navigate("/alogin")}
            className="bg-amber-400 hover:bg-amber-500 text-black py-2 px-4 w-full rounded-md font-medium transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Aregister;