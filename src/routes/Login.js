import React, { useState } from "react";
import "./Login.css";

export default function Login({ setUser }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = existingUsers.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (foundUser) {
      alert("Login Successful 🎉");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      if (setUser) setUser(foundUser);
      setCredentials({ email: "", password: "" });
      window.location.href = "/"; // ✅ redirect to home
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
