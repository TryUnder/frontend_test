import React, { useState } from "react";
import '../scss/Header.scss';

const Header = () => {
    const greyLogo = 'https://github.com/TryUnder/frontend_test/blob/master/react_solution/src/images/logo_gray.png?raw=true';
    const orangeLogo = 'https://github.com/TryUnder/frontend_test/blob/master/react_solution/src/images/logo_orange.png?raw=true'
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