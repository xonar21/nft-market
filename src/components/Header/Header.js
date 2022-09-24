import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
function Header() {
    
    return (
        <header className="header">
            <img className="header__logo" src={logo}/>
            <div className="header__groupLinks">
                <a className="header__link" href="#">
                    Marketplace
                </a>
                <a className="header__link" href="#">
                    Resource
                </a>
                <a className="header__link" href="#">
                    About
                </a>
            </div>
            <form className="header__form">
                <input className="header__search" placeholder="Search"/>
                <button className="header__searchButton">
                    <img className="header__searchImg" src={search}/>
                </button>
            </form>
            <button className="header__upload header__button">
                Upload
            </button>
            <button className="header__wallet header__button">
                Connect Wallet
            </button>
        </header>
    );
}
export default Header;