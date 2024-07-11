import React, { useState } from "react";
import '../scss/Footer.scss';

const Footer = ({FontAwesomeIcon, faChevronUp}) => {
    const [ isPanelVisible, setPanelVisible ] = useState(false)

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible)
    }

    const resetContent = () => {
        localStorage.removeItem('content');
        window.location.reload();
    }

    const appendName = () => {
        document.getElementById('user-name').innerHTML += '<br>Hubert Lewowicki';
    }

    return (
        <>
            <footer className="footer">
                <div className="footer-flex">
                    <p className="footer-text">CSS<br/> IS<br/> AWESOME<br/></p>
                    <p className="footer-text-logo">nabthat</p>
                    <div>
                        <button className="footer-button" onClick = {togglePanel}>
                            POKAŻ
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </div>
                </div>
                {
                    isPanelVisible && (
                        <div className="footer-panel">
                            <button onClick={resetContent}>ZRESETUJ USTAWIENIA</button>
                            <button onClick={appendName}>POKAŻ DANE OSOBOWE</button>
                        </div>
                    )
                }
            </footer>
        </>
    )
}

export default Footer;