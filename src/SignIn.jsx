import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(formData.username));

    if (
      storedUser &&
      formData.username === storedUser.username &&
      formData.password === storedUser.password
    ) {
      navigate("/component1");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  };

  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {!isMobile && (
          <>
            <div className="relative hidden md:block">
              <motion.img
                src="https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mountain landscape"
                className="w-full h-full object-cover opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
                <motion.span
                  className="text-lg md:text-[25px] cursor-pointer hover:underline font-quicksand"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Swayambhunath
                </motion.span>
                <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                  The Monkey Temple, is an ancient Buddhist complex in
                  Kathmandu, Nepal. It features an iconic white stupa with
                  "Buddha eyes" painted on all four sides, symbolizing Buddha's
                  all-seeing, all-knowing presence and his compassionate watch
                  over the world.
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <motion.img
                src="https://i.pinimg.com/736x/49/f4/0d/49f40d48ee9372e7e6ebcd312b2ce6c5.jpg"
                alt="Ocean sunset"
                className="w-full h-full object-cover opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
                <motion.span
                  className="text-lg md:text-[25px] cursor-pointer hover:underline font-quicksand"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Mount Everest
                </motion.span>
                <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                  Mount Everest is a peak in the Himalaya mountain range. It is
                  located between Nepal and Tibet, an autonomous region of
                  China. At 8,849 meters (29,032 feet), it is considered the
                  tallest point on Earth.
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <motion.img
                src="https://i.pinimg.com/564x/4c/98/b9/4c98b9181d64040bccc56ca699cd5f5b.jpg"
                alt="Forest path"
                className="w-full h-full object-cover opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <div className="absolute bottom-2 left-2 text-white text-shadow p-4 group">
                <motion.span
                  className="text-lg md:text-[25px] cursor-pointer hover:underline font-quicksand"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Pashupatinath Temple
                </motion.span>
                <div className="hidden group-hover:block mt-2 bg-transparent border border-gray-300 p-2 shadow-lg text-white font-quicksand text-sm">
                  Pashupatinath Temple, dedicated to Lord Shiva and located on
                  the banks of the holy Bagmati River in Kathmandu, Nepal, is a
                  timeless spiritual and cultural symbol.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-[400px] mx-auto bg-black bg-opacity-40 p-8 mb-12 rounded-lg shadow-md flex flex-col"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-2xl font-bold text-white">Sign In</h1>

        <input
          className="w-full px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-4"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          className="w-full px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white rounded-sm mt-6 mb-4"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <Link to="/SignUp" className="text-blue-500 mt-4 text-right underline ">
          Register
        </Link>
      </motion.form>
    </div>
  );
};

export default SignIn;
