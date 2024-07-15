import React, { useState } from "react";
import '../scss/Header.scss';

const Header = () => {
    const greyLogo = 'https://i.ibb.co/MpCk9vs/logo-gray.png';
    const orangeLogo = 'https://i.ibb.co/zJXCNGg/logo-orange.png'
    const [ logoSrc, setLogoSrc ] = useState(greyLogo);

    const handleMouseOver = () => {
        setLogoSrc(orangeLogo)
    }

    const handleMouseOut = () => {
        setLogoSrc(greyLogo)
    }

    return (
        <>
            <header>
                <div class="headerWrapper">
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
                </div>
            </header>
        </>
    )
}

export default Header;