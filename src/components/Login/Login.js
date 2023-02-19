import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import googlePic from "../../images/logo/google-logo.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, loading, user, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  
  const handleUserSignIn = async (event) => {
    event.preventDefault();
    const exist = await signInWithEmailAndPassword(email, password);

    if(exist){
      navigate('/')
    }
  };

  // if (user) {
  //   console.log(user);
  //   navigate("/");
  // }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title text-center">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-groups">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
         
          <div className="input-groups">
            <label className="d-block" htmlFor="password">
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Submit" />
        </form>
        <p className="mt-2">
          New to Ema-John ?
          <Link className="form-link" to="/signup">
            Create an account
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

export default Login;
