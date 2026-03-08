import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Navbar';

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const res = await axios.post("http://localhost:8000/api/users/login", payload);

      console.log("Login Response:", res.data);

      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful");
        navigate('/uhome');
      } else {
        alert(res.data.message || "Wrong credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  const goToSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-amber-100">
      <NavBar />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-8 rounded-2xl shadow-lg bg-white mt-12">
          <h2 className="text-center text-3xl font-extrabold text-gray-800">
            Login to your account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white w-full py-2 px-4 rounded-md font-medium transition"
              >
                Log in
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">Don't have an account?</p>
              <button
                onClick={goToSignup}
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
};

export default Login;