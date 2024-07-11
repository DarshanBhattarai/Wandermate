import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    console.log("Submitted", formData);
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
      <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen  flex-col ">
        <label htmlFor="username">Username</label>
        <input 
          className="border-2"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input className="border-2"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>

        <Link to="/SignUp">Register</Link>
      </form>
    </>
  );
};

export default SignIn;
