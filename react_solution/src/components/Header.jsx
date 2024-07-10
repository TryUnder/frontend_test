import React from "react";
import '../scss/Header.scss';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="Logo" className="test"/>
                </div>
                <p>Zadanie rekrutacyjne</p>
            </header>
        </>
    )
}

export default Header;