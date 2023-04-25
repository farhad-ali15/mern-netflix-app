import axios from "axios";
import "./register.scss";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const Navigate = useNavigate();
  const handleFinish = async (e) => {
    e.preventDefault();
    setUserName(userNameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post("http://localhost:8800/api/auth/register", {
        userName,
        email,
        password,
      });
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV Shows and more....</h1>
        <h2>Watch anywhere , cancel anytime..</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="userName" ref={userNameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
