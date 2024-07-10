import React from "react";
import '../scss/Footer.scss';

const Footer = ({FontAwesomeIcon, faChevronUp}) => {
    return (
        <>
            <footer>
                <div>
                    <p>CSS IS AWESOME</p>
                    <div>
                        <button>
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