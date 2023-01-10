import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <header class="header">

                <div id='header-box'>
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <Link to="/">SELL-NOW.in</Link>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <nav class="header__menu">
                                <ul className='header_menu_ul'>
                                    <li class="active"><Link to="/">Home</Link></li>
                                    <li><Link to="./sell-item">Sell</Link></li>
                                    <li><Link to="#">Profile</Link>
                                        <ul class="header__menu__dropdown">
                                            <li><Link to="/self-items">Your Items</Link></li>
                                            <li><Link to="/ordered-items">Orders</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="hero__search__form">
                                            <form action="#">
                                                <input type="text" placeholder="What do yo u need?" />
                                                <button type="submit" class="site-btn">SEARCH</button>
                                            </form>
                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-2">
                            <div class="header__cart">
                                <button className="btn-primary btn-logout">Logout</button>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>

        </div>
    )
}
