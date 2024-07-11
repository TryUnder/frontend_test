import React from "react";
import '../scss/Content.scss';

const Content = () => {
    return (
        <>
            <main className="main-container">
                <div>
                    <h1>Nagłówek H1</h1>
                </div>
                <div className="block-container">
                    <div className="first-block">
                        <p className="font-style">BLOK PIERWSZY</p>
                        <div className="radio-group">
                            <div className="radio-item">
                                <input type="radio" id="option1" className="radio-group" name="option" />
                                <label className="font-option">Opcja pierwsza</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" id="option2" className="radio-group" name="option" />
                                <label className="font-option">Opcja druga</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" id="option3" className="radio-group" name="option" />
                                <label className="font-option">Opcja losowa</label>
                            </div>
                        </div>
                    </div>
                    <div className="second-block">
                        <p className="font-style">BLOK DRUGI</p>
                        <div className="buttons-div">
                            <button className="font-style">ZASTĄP</button>
                            <button className="font-style">DOKLEJ</button>
                        </div>
                        
                    </div>
                    <div className="third-block">
                        <p className="font-style">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE...</p>
                        <p className="par-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec erat a purus ornare euismod sit amet id lorem. Curabitur feugiat vehicula ipsum. Morbi sodales, lectus a fringilla fermentum, nisi lacus accumsan felis, viverra semper ex odio sed mi. Duis vitae consectetur libero, aliquet lobortis erat. Proin maximus sapien non velit ultricies, et pretium odio iaculis. Praesent volutpat tempus turpis, eget lobortis risus. Praesent dignissim enim non diam dictum ultrices. Vestibulum gravida eros urna, eu cursus felis tempor vel. Etiam id mi mollis nisl faucibus gravida. Nam in libero eu massa tempus euismod. Sed in interdum lacus. Vestibulum ultricies, diam.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content;