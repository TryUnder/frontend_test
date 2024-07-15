import React, { useState, useEffect } from "react";
import '../scss/Content.scss';
import data from '../data/data.json';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec erat a purus ornare euismod sit amet id lorem. Curabitur feugiat vehicula ipsum. Morbi sodales, lectus a fringilla fermentum, nisi lacus accumsan felis, viverra semper ex odio sed mi. Duis vitae consectetur libero, aliquet lobortis erat. Proin maximus sapien non velit ultricies, et pretium odio iaculis. Praesent volutpat tempus turpis, eget lobortis risus. Praesent dignissim enim non diam dictum ultrices. Vestibulum gravida eros urna, eu cursus felis tempor vel. Etiam id mi mollis nisl faucibus gravida. Nam in libero eu massa tempus euismod. Sed in interdum lacus. Vestibulum ultricies, diam.";

const Content = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [content, setContent] = useState([]);
    const [usedContents, setUsedContents] = useState([]);
    const [fullContent, setFullContent] = useState('');

    useEffect(() => {
        const storedContent = JSON.parse(localStorage.getItem('content')) || [];
        setContent(storedContent);
        setUsedContents(storedContent.map((item) => item.id));
        setFullContent(loremIpsum);
    }, []);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const replaceContent = () => {
        const newContent = getContent();
        if (newContent) {
            const updatedContent = [newContent];
            setContent(updatedContent);
            setUsedContents([newContent.id]);
            updateFullContent(updatedContent);
            localStorage.setItem('content', JSON.stringify(updatedContent));
        } else {
            alert('There is no more unique content');
        }
    }

    const appendContent = () => {
        const newContent = getContent();
        if (newContent) {
            if (usedContents.includes(newContent.id)) {
                alert('This content has already been used. Please choose another option.');
                return;
            }

            const updatedContent = [...content, newContent].sort((a, b) => a.text.localeCompare(b.text));
            setContent(updatedContent);
            const updatedUsedContents = [...usedContents, newContent.id];
            setUsedContents(updatedUsedContents);
            updateFullContent(updatedContent);
            localStorage.setItem('content', JSON.stringify(updatedContent));
        } else {
            alert('There is no more unique content');
        }
    }

    const updateFullContent = (updatedContent) => {
        const updatedFullContent = updatedContent.map(item => item.text).join(' ');
        setFullContent(`${loremIpsum} ${updatedFullContent}`);
    }

    const getContent = () => {
        let newContent;
        if (selectedOption === '1') {
            newContent = data.find((item) => item.id === '1');
        } else if (selectedOption === '2') {
            newContent = data.find((item) => item.id === '2');
        } else if (selectedOption === '3') {
            const availableContent = data.filter((item) => !usedContents.includes(item.id));
            if (availableContent.length === 0) {
                return null;
            }
            newContent = availableContent[Math.floor(Math.random() * availableContent.length)];
        }
        return newContent;
    }

    return (
        <>
            <main className="main-container">
                <div>
                    <h1>Nagłówek H1</h1>
                </div>
                <div className="block-container">
                    <div className="first-block">
                        <p className="font-style par-first-mobile">BLOK PIERWSZY</p>
                        <div className="radio-group">
                            <div className="radio-item">
                                <input type="radio" id="option1" className="radio-group" name="option" value="1" onChange={handleOptionChange}/>
                                <label className="font-option">Opcja pierwsza</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" id="option2" className="radio-group" name="option" value="2" onChange={handleOptionChange} />
                                <label className="font-option">Opcja druga</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" id="option3" className="radio-group" name="option" value="3" onChange={handleOptionChange}/>
                                <label className="font-option">Opcja losowa</label>
                            </div>
                        </div>
                    </div>
                    <div className="second-block">
                        <p className="font-style par-second-mobile">BLOK DRUGI</p>
                        <div className="buttons-div">
                            <button className="font-style buttons-hov button-mobile" onClick={replaceContent}>ZASTĄP</button>
                            <button className="font-style buttons-hov button-mobile" onClick={appendContent}>DOKLEJ</button>
                        </div>
                    </div>
                    <div className="third-block">
                        <p className="font-style par-cut">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE...</p>
                        <p className="par-text">{fullContent}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content;
