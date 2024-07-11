import React from "react";
import '../scss/Footer.scss';

const Footer = ({FontAwesomeIcon, faChevronUp}) => {
    return (
        <>
            <footer className="footer">
                <div className="footer-flex">
                    <p className="footer-text">CSS<br/> IS<br/> AWESOME<br/></p>
                    <p className="footer-text-logo">nabthat</p>
                    <div>
                        <button className="footer-button">
                            POKAŻ
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;