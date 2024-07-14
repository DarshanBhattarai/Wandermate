import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);

      // Save formData to localStorage
      localStorage.setItem(formData.username, JSON.stringify(formData));
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Registration successful!");
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
        <div className="relative">
          <motion.img
            src="https://i.pinimg.com/564x/4e/44/ab/4e44ab3bfb0b33d5df2c98f130d72590.jpg"
            alt="Mountain landscape"
            className="w-full h-full object-cover opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
            <motion.span className="text-[25px] cursor-pointer hover:underline font-quicksand"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tilicho Lake
            </motion.span>
            <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand">
              Tilicho Lake, located in the Annapurna range of the Himalayas in
              Nepal, is one of the highest lakes in the world at an altitude of
              4,919 meters (16,138 feet). It is renowned for its breathtaking
              alpine scenery and challenging trekking routes.
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.img
            src="https://i.pinimg.com/564x/00/44/e0/0044e0ddf38e64e5f4e7801f97c5bdbb.jpg"
            alt="Ocean sunset"
            className="w-full h-full object-cover opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
            <motion.span className="text-[25px] cursor-pointer hover:underline font-quicksand"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bhaktapur Durbar Square
            </motion.span>
            <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand">
              Is the UNESCO World Heritage Site in Nepal, showcases magnificent
              Newari architecture with its historic palaces, temples, and
              courtyards. It is renowned for its intricate wood carvings and
              rich cultural heritage.
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.img
            src="https://i.pinimg.com/564x/1a/ec/cd/1aeccd4dbf0f12820ee19c320a46c987.jpg"
            alt="Forest path"
            className="w-full h-full object-cover opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
            <motion.span className="text-[25px] cursor-pointer hover:underline font-quicksand"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Chitwan National Park
            </motion.span>
            <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand">
              Chitwan National Park, located in Nepal, is a UNESCO World
              Heritage Site renowned for its diverse wildlife, including Bengal
              tigers, one-horned rhinoceroses, and various bird species. It
              offers rich ecosystems of forests, grasslands, and rivers,
              providing exceptional opportunities for jungle safaris and
              wildlife viewing.
            </div>
          </div>
        </div>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 w-[400px] bg-black bg-opacity-40 mb-[120px] p-5 rounded-lg shadow-md flex flex-col"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>

        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="w-full h-12 px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-2"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full h-12 px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-2"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}

        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="w-full h-12 px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-2"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm password"
          className="w-full h-12 px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-4"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="w-[200px]  bg-blue-500 text-white py-2 px-4 rounded-sm"
        >
          Register
        </button>
        <Link to="/SignIn" className="text-blue-500  text-right underline">
          Go to Sign In
        </Link>
      </motion.form>
    </div>
  );
};

export default SignUp;
