import React, { useState } from "react";
import '../scss/Footer.scss';

const Footer = ({FontAwesomeIcon, faChevronUp, faChevronRight, faChevronDown}) => {
    const [ isPanelVisible, setPanelVisible ] = useState(false)

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible)
    }

    const resetContent = () => {
        localStorage.removeItem('content');
        window.location.reload();
    }

    const appendName = () => {
        const userName = document.getElementById('user-name').innerHTML;
        if (userName.includes('Hubert Lewowicki')) {
            return;
        }
        
        document.getElementById('user-name').innerHTML += '<br>Hubert Lewowicki';
    }

    return (
        <>
            <footer className="footer">
                <div className="footer-flex">
                    <p className="footer-text">CSS<br/> IS<br/> AWESOME<br/></p>
                    <p className="footer-text-logo"><span>nabthat</span></p>
                    <div>
                        <button className="footer-button" onClick = {togglePanel}>
                            <p><b>POKAŻ</b></p>
                            {
                                isPanelVisible ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp}  />
                            }
                        </button>
                    </div>
                </div>
                {
                    isPanelVisible && (
                        <div className="footer-panel">
                            <div className="footer-panel-options">
                                <FontAwesomeIcon icon={faChevronRight} />
                                <a onClick={resetContent}>ZRESETUJ USTAWIENIA</a>
                            </div>
                            <div className="footer-panel-options">
                                <FontAwesomeIcon icon={faChevronRight} />
                                <a onClick={appendName}>POKAŻ DANE OSOBOWE</a>
                            </div>
                        </div>
                    )
                }
            </footer>
        </>
    )
}

export default Footer;