// src/routes/SignupLogin.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthStyles.css";
import { UserContext } from "../userContext"; // ✅ Import context

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // ✅ Access user context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameToUse = isLogin ? email.split("@")[0] : username;

    // ✅ Set user in global context
    setUser({
      name: nameToUse,
      initial: nameToUse.charAt(0).toUpperCase(),
      isLoggedIn: true,
    });

    // ✅ Redirect to homepage
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          className="switch-btn"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Sign Up" : " Login"}
        </button>
      </p>
    </div>
  );
};

export default SignupLogin;
