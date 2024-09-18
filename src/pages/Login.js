import React , { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    let validationErrors = {};
    let isValid = true;

    // Validate username (either email or phone)
    if (!username) {
      isValid = false;
      validationErrors["username"] = "Please enter your email or phone number.";
    } else {
      // Basic email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{10}$/; // Assumes phone numbers are 10 digits
      if (!emailPattern.test(username) && !phonePattern.test(username)) {
        isValid = false;
        validationErrors["username"] = "Enter a valid email or Phone number.";
      }
      // return null;
    }

    // Validate password
    if (!password) {
      isValid = false;
      validationErrors["password"] = "Please enter your password.";
    } else if (password.length < 6) {
      isValid = false;
      validationErrors["password"] = "Password must be at least 6 characters long.";
    }
    // return null;

    setErrors(validationErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Proceed with login logic (API call, etc.)
      console.log("Form is valid. Proceeding with login...");
    } else {
      console.log("Validation failed.");
    }
  };


  return (
    <div>
      <div className="background"></div>
      <form onSubmit={handleSubmit}>
        <h2>
          Soul <i class="fas fa-music"></i> <span>Music</span>
        </h2>
        
        <h3>
          Login <span>Here</span>
        </h3>

        <label htmlFor="username">E-mail or Phone</label>
        <input type="text" placeholder="Email or Phone" id="username " value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
        {errors.username && <p className="error">{errors.username}</p>}
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"  value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
          {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Log In </button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
        <div className="register">
          <p>
            Don't have an account? <a href="/register">Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
