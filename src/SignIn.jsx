import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      formData.username === storedUser.username &&
      formData.password === storedUser.password
    ) {
      console.log("Sign In Successful:", formData);
      setError("");
    } else {
      console.log("Sign In Failed");
      setError("Invalid username or password");
    }

    setFormData({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="relative flex justify-center h-screen">
        <img
          src="https://wallpapers.com/images/featured/nepal-684cyeq8t5f8csf9.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px] animate-fade-out"
        />
        <form
          onSubmit={handleSubmit}
          className="relative bottom-0 mt-[200px] w-[400px] bg-black bg-opacity-80 p-8 rounded-lg shadow-md flex flex-col "
        >
          <Nav />
          <h1 className="text-2xl font-bold text-white">Sign In</h1>

          <input
            className="w-full px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white  rounded-sm mt-6 mb-4"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            className="w-full px-3 py-3 border-2 border-slate-400 bg-transparent text-white placeholder-white  rounded-sm mt-6 mb-4"
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
          <Link to="/SignUp" className="text-blue-500 mt-4 text-right">
            Register
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
