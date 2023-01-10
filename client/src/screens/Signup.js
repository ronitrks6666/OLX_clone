import React from 'react'

export default function Signup() {

    usesta

    return (
        <div class="container">
            <header class="header">
                <i class="ph-dog"></i>
                <h2 class="title">SellNow</h2>
                <span class="good">Sign up now</span>
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
                    <input id='remember-me-checkbox' type="checkbox" name="inputCheckbox" aria-hidden="true" tabindex="-1" />
                    <span class="remember-span">Remember me for 30 days.</span>
                </label>

                <button type="submit" class="btn-sign-in">Sign In</button>
            </form>

            <footer class="footer">
                <a href="#" class="footer-link">Forgot your password?</a>
                <a href="#" class="footer-link">Don't have an account yet? Sign Up!</a>
            </footer>

            <script async="async" data-cfasync="false" src="//madrogueindulge.com/6f994c72f6caa154b79fc6f66f252146/invoke.js"></script>
            <div id="container-6f994c72f6caa154b79fc6f66f252146"></div>
        </div>
    )
}
