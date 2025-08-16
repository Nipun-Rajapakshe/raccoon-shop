import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <div className='header'>

        <div className="logo">
            <h1>RaccoonShop</h1>
        </div>

        <div className="nav-bar">
            <ul>
                <li><a href="/">MEN</a></li>
                <li><a href="/">WOMEN</a></li>
                <li><a href="/">KIDS</a></li>
            </ul>
        </div>
        <div className='search-cart-login'>

            <div className="search-bar">
                <input type="text" placeholder="search item..." />
                <button type="submit">Search</button>
            </div>

            <div className="cart-login">
                <div className="cart">
                    <a href="/">🛒</a>
                </div>
                <div className="login">
                    <a href="/">🔘</a>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Header
