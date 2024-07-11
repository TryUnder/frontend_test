import React, { useState } from "react";
import '../scss/Header.scss';
import logoGrey from '../images/logo_gray.png';
import logoOrange from '../images/logo_orange.png';

const Header = () => {
    const [ logoSrc, setLogoSrc ] = useState(logoGrey);

    const handleMouseOver = () => {
        setLogoSrc(logoOrange)
    }

    const handleMouseOut = () => {
        setLogoSrc(logoGrey)
    }

    return (
        <>
            <header>
                <a href='/'>
                    <img 
                        src={logoSrc} 
                        alt="Logo" 
                        className="logo" 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}    
                    />
                </a>
                <p className="header-par" id="user-name">Zadanie <b>rekrutacyjne</b></p>
            </header>
        </>
    )
}

export default Header;