import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import googlePic from "../../images/logo/google-logo.svg";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [error, setError]=useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, ] = useCreateUserWithEmailAndPassword(auth);
    

    const handleEmailBlur = (event)=>{
        setEmail(event.target.value)
    };



    const handlePasswordBlur = (event)=>{
            setPassword(event.target.value);
    };


    const handleConfirmPasswordBlur = (event)=>{
        setConfirmPassword(event.target.value)
    };

    if(user){
        navigate('/login')
    };


    const handleCreateUser = (event)=>{
        event.preventDefault()
       if(password !== confirmPassword){
        setError('Your two password did not match')
        return;
       };
       if(password.length<6){
        setError('password must be six characters or longer')
        return;
       };
       createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title text-center">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-groups">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
          </div>
          <div className="input-groups">
            <label className="d-block" htmlFor="password">
              Password
            </label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
          </div>
          <div className="input-groups">
            <label className="d-block" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="mt-2">
          Already have an account ?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="form-text">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <div className="google-logo">
          <img src={googlePic} alt="google logo" />
          <h5>Continue with Google</h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
