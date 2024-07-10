import React from "react";
import '../scss/Content.scss';

const Content = () => {
    return (
        <>
            <div>
                <h1>Nagłówek H1</h1>
            </div>
            <div>
                <div>
                    <p>BLOK PIERWSZY</p>
                    <input type="radio" />
                    <label>Opcja pierwsza</label>
                    <input type="radio" />
                    <label>Opcja druga</label>
                    <input type="radio" />
                    <label>Opcja losowa</label>
                </div>
                <div>
                    <p>BLOK DRUGI</p>
                    <button>ZASTĄP</button>
                    <button>DOKLEJ</button>
                </div>
                <div>
                    <p>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE...</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec erat a purus ornare euismod sit amet id lorem. Curabitur feugiat vehicula ipsum. Morbi sodales, lectus a fringilla fermentum, nisi lacus accumsan felis, viverra semper ex odio sed mi. Duis vitae consectetur libero, aliquet lobortis erat. Proin maximus sapien non velit ultricies, et pretium odio iaculis. Praesent volutpat tempus turpis, eget lobortis risus. Praesent dignissim enim non diam dictum ultrices. Vestibulum gravida eros urna, eu cursus felis tempor vel. Etiam id mi mollis nisl faucibus gravida. Nam in libero eu massa tempus euismod. Sed in interdum lacus. Vestibulum ultricies, diam.</p>
                </div>
            </div>
        </>
    )
}

export default Content;