import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from '../components/Loading';




const { useNavigate, Link } = require("react-router-dom");


export default function Login() {

  const [user, setUser] = useState({})
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const [signupAlert, setsignupAlert] = useState(false)
  const [loading, setloading] = useState(false)
  //const navigate = useNavigate();


  
  const submitClick = (e) => {
    e.preventDefault()
    setloading(true)
    console.log('Login-up')
    const data = {
        fullname: name, email, password
    }
    axios.post("/api/login", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            console.log(response.data)
            setsignupAlert(true)
            setloading(false)
            localStorage.setItem("auth-token", response.data.token);
            window.location.href = '/'
        },
        (error) => {
            setloading(false)
            if (error.response.status == 401) {
            }
        }
    );
}


  useEffect(() => {
    localStorage.setItem("auth-token", "");
    //let token = localStorage.getItem("auth-token");

  }, []);

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div class="container">
      <header class="header">
        <i class="ph-dog"></i>
        <h2 class="title">SellNow</h2>
        <span class="good">Welcome back! Good to see you again.</span>
      </header>

      <form name="signup" class="form" onSubmit={e => { e.preventDefault(); }}>
        <label for="email" class="label-email">
          <span class="email-span">Email address</span>

          <div class="input-email-container">
            <i class="ph-envelope"></i>
            <input type="email" name="email" id="email" value={email} onChange={(e) => { setemail(e.target.value) }} class="input-email" placeholder="Enter your email" autofocus />
          </div>
        </label>

        <label for="password" class="label-password">
          <span class="password-span">Password</span>

          <div class="input-password-container">
            <i class="ph-lock"></i>
            <input type="password" name="password" id="password" value={password} onChange={(e) => { setpassword(e.target.value) }} class="input-password" placeholder="*************" />
          </div>

        </label>

        <div className="text-center">
          {loading ? (<Loading />) : <button type="submit" class="btn-sign-in" onClick={(e) => submitClick(e)}>Sign Up</button>}
        </div>


      </form>

      <footer class="footer">
        <a href="#" class="footer-link">Forgot your password?</a>
        <Link to="/sign-up" class="footer-link">Don't have an account yet? Sign Up!</Link>
      </footer>

      <script async="async" data-cfasync="false" src="//madrogueindulge.com/6f994c72f6caa154b79fc6f66f252146/invoke.js"></script>
      <div id="container-6f994c72f6caa154b79fc6f66f252146"></div>
    </div>
  )
}
