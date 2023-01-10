import React, { useState } from 'react'
import axios from "axios";
import Loading from '../components/Loading';
const { useNavigate, Link } = require("react-router-dom");


export default function Signup() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [signupAlert, setsignupAlert] = useState(false)
    const [loading, setloading] = useState(false)

    const submitClick = (e) => {
        e.preventDefault()
        setloading(true)
        console.log('Signup')
        const data = {
            fullname: name, email, password
        }
        axios.post("/api/register", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => {
                console.log(response.data)
                setsignupAlert(true)
                setloading(false)
            },
            (error) => {
                setloading(false)
                if (error.response.status == 401) {
                }
            }
        );
    }

    return (
        <div class="container">
            <header class="header">
                <i class="ph-dog"></i>
                <h2 class="title">SellNow</h2>
                <span class="good">Sign up now</span>
            </header>

            <form name="signup" class="form" onSubmit={e => { e.preventDefault(); }}>
                <label for="email" class="label-email">
                    <span class="email-span">Full name</span>

                    <div class="input-email-container">
                        <i class="ph-envelope"></i>
                        <input name="name" id="name" value={name} onChange={(e) => { setname(e.target.value) }} class="input-email" placeholder="Enter your email" autofocus />
                    </div>
                </label>
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



            {signupAlert ? (<footer class="footer">
                <div class="alert alert-info" role="alert">
                    You are registered successfully click <Link to='/login' class="alert-link">Login</Link> to continue.
                </div>
            </footer>) : <></>}
        </div>
    )
}
