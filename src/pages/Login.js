import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isEffect, setEffect] = useState(0);
  return (
    <div>
      <Navbar />
      <h1 className="product-heading">Login</h1>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="username">
              Enter Username
            </label>
            <input
              className="form__input"
              type="text"
              value={username}
              id="username"
              placeholder="Username"
              style={{ marginLeft: "70px" }}
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Enter Password
            </label>
            <input
              className="form__input"
              type="text"
              value={password}
              id="password"
              placeholder="Password"
              style={{ marginLeft: "70px" }}
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="register-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
