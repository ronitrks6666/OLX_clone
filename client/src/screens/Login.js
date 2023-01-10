import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const { useNavigate, Link } = require("react-router-dom");


export default function Login() {

  const [user, setUser] = useState({})
  //const navigate = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");
    
          if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
          }
    
          const tokenRes = await axios.post("/api/auth/isTokenValid", {
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
          });
    
          if (tokenRes.data) {
            const userRes = await axios.get("/api/auth/users", {
              headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            setUser({
              token: token,
              user: userRes.data,
            });
    
            //setisLoggedIn(true);
            //navigate("/");
          }
        };
        //setregisterDet(user.user);
     
        checkLoggedIn();
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

                <form name="signin" class="form">
                    <label for="email" class="label-email">
                        <span class="email-span">Email address</span>

                        <div class="input-email-container">
                            <i class="ph-envelope"></i>
                            <input type="email" name="email" id="email" class="input-email" placeholder="Enter your email" autofocus />
                        </div>
                    </label> 

                    <label for="password" class="label-password">
                        <span class="password-span">Password</span>

                        <div class="input-password-container">
                            <i class="ph-lock"></i>
                            <input type="password" name="password" id="password" class="input-password" placeholder="*************" />
                        </div>

                    </label>

                    <label for="remember" class="label-remember">
                        <input id='remember-me-checkbox' type="checkbox" name="inputCheckbox" aria-hidden="true" tabindex="-1"  />
                        <span class="remember-span">Remember me for 30 days.</span>
                    </label>

                    <button type="submit" class="btn-sign-in">Sign In</button>
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
