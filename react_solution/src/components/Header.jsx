import React from "react";
import '../scss/Header.scss';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <>
            <header>
                <a href='/'>
                    <img src={logo} alt="Logo" className="logo"/>
                </a>
                <p className="header-par">Zadanie <b>rekrutacyjne</b></p>
            </header>
        </>
    )
}

export default Header;