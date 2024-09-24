import React, { useState } from 'react';
import './Register.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 


const Register = () => {
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");

  return (
  
    <div>
      <div className="background">
      </div>  
      
      <form className='forms'>
        <h2>  Soul <i class="fa-solid fa-music"></i> <span>Music</span> </h2>
        <h3>Register <span>Here</span></h3>
        <label htmlFor="username" className='label'>Email or Phone number</label>
        <input type="text" placeholder="Email or Phone" id="username" className='input'></input>
        <label htmlFor="password" className='label'>Password</label>
        <input type="password" placeholder="Password" id="password" className='input'></input>
        <label htmlFor="dob" className='label'>Date of Birth</label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select your Date of Birth"
            id="dob"
            showYearDropdown             // Enable year dropdown
      scrollableYearDropdown       // Make year dropdown scrollable
      yearDropdownItemNumber={200} // Number of years to show
          />
        <label htmlFor="gender" className='label'>Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className='btn-grp'>
          <button className='btn'>Register</button>
        </div>
        <p>Already have an account? <a href="/">Login Here</a></p>
        
      </form>
    </div>
  );
};

export default Register;