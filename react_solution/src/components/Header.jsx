import React from "react";
import '../scss/Header.scss';
import logoGrey from '../images/logo_gray.png';

const Header = () => {
    return (
        <>
            <header>
                <a href='/'>
                    <img src={logoGrey} alt="Logo" className="logo"/>
                </a>
                <p className="header-par" id="user-name">Zadanie <b>rekrutacyjne</b></p>
            </header>
        </>
    )
}

export default Header;