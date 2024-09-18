import React from 'react';
// import './Register.css';

const Register = () => {
  return (
    <div>
      <div className="background">
      </div>  
      <h3>Register <span>Here</span></h3>
      <form>
        <label htmlFor="username">User</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>
        <label htmlFor="dob">Date of Birth</label>
        <input type="text" placeholder="Date of Birth" id="dob"></input>
        <label htmlFor="gender">Gender</label>
        <input type="text" placeholder="Gender" id="gender"></input>
        <button >Register</button>
        <p>Already have an account? <a href="/">Login Here</a></p>
        
      </form>
    </div>
  );
};

export default Register;