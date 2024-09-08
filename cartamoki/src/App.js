import React, { useEffect, useState } from 'react';
import './App.css';
import { TfiBackLeft } from "react-icons/tfi";
import Header from './components/Header';
import TarjetaComidas from './components/TarjetaComidas';
import TarjetaBebidas from './components/TarjetaBebidas';
import MenuComidas from './components/MenuComidas';
import MenuBebidas from './components/MenuBebidas';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeCard, setActiveCard] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);


    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const showMenuComidas = () => {
        setActiveCard('comidas');
        setActiveMenu('comidas');
    };

    const showMenuBebidas = () => {
        setActiveCard('bebidas');
        setActiveMenu('bebidas');
    };

    const showTarjetas = () => {
        setActiveCard(null);
        setActiveMenu(null);
    };

    return (
        <div className="App">
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} showTarjetas={showTarjetas} />
            
            <div className="content">
                {!activeMenu && (
                    <div className="contenedor">
                        {!activeCard || activeCard === 'comidas' ? (
                            <TarjetaComidas onClick={showMenuComidas} />
                        ) : null}
                        {!activeCard || activeCard === 'bebidas' ? (
                            <TarjetaBebidas onClick={showMenuBebidas} />
                        ) : null}
                    </div>
                )}

                {activeMenu && (
                    <div className="menu-container">
                        {activeMenu === 'comidas' && <MenuComidas />}
                        {activeMenu === 'bebidas' && <MenuBebidas />}
                        <div className="separador"></div>
                        <button className="back-button" onClick={showTarjetas}>Volver <TfiBackLeft /></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
