import React, { useEffect, useState } from 'react';
import './App.css';
import { TfiBackLeft } from "react-icons/tfi";  // Importa un ícono de flecha desde una librería de iconos
import Header from './components/Header';      // Importa el componente Header
import TarjetaComidas from './components/TarjetaComidas';  // Importa el componente TarjetaComidas
import TarjetaBebidas from './components/TarjetaBebidas';  // Importa el componente TarjetaBebidas
import MenuComidas from './components/MenuComidas';        // Importa el componente MenuComidas
import MenuBebidas from './components/MenuBebidas';        // Importa el componente MenuBebidas

const App = () => {
    // Estado para manejar el tema oscuro/claro (true = oscuro, false = claro)
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Estado para saber cuál tarjeta (comida o bebida) está activa o seleccionada
    const [activeCard, setActiveCard] = useState(null);

    // Estado para saber cuál menú (comidas o bebidas) está activo
    const [activeMenu, setActiveMenu] = useState(null);

    // Este efecto se ejecuta cuando el valor de 'isDarkMode' cambia. Aplica o remueve las clases CSS para el tema oscuro o claro.
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);  // Aplica la clase 'dark-mode' si isDarkMode es true
        document.body.classList.toggle('light-mode', !isDarkMode);  // Aplica la clase 'light-mode' si isDarkMode es false
    }, [isDarkMode]);  // El array de dependencias incluye 'isDarkMode', lo que significa que el efecto solo se ejecutará cuando 'isDarkMode' cambie.

    // Función que alterna entre el tema oscuro y claro
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);  // Cambia el valor de 'isDarkMode' al opuesto del valor actual
    };

    // Función que se ejecuta cuando haces clic en la tarjeta de comidas; activa el menú de comidas
    const showMenuComidas = () => {
        setActiveCard('comidas');  // Establece la tarjeta activa como 'comidas'
        setActiveMenu('comidas');  // Activa el menú de comidas
    };

    // Función que se ejecuta cuando haces clic en la tarjeta de bebidas; activa el menú de bebidas
    const showMenuBebidas = () => {
        setActiveCard('bebidas');  // Establece la tarjeta activa como 'bebidas'
        setActiveMenu('bebidas');  // Activa el menú de bebidas
    };

    // Función que se ejecuta cuando haces clic en el botón "Volver", lo que reinicia ambos estados y vuelve a mostrar las tarjetas.
    const showTarjetas = () => {
        setActiveCard(null);  // Desactiva cualquier tarjeta activa
        setActiveMenu(null);  // Desactiva cualquier menú activo
    };

    // JSX que define la estructura visual y funcional del componente
    return (
        <div className="App">
            {/* Se pasa el estado y las funciones necesarias al componente Header */}
            <Header 
                isDarkMode={isDarkMode}         // Pasa el valor de 'isDarkMode' al Header como prop
                toggleTheme={toggleTheme}       // Pasa la función 'toggleTheme' para alternar entre oscuro y claro
                showTarjetas={showTarjetas}     // Pasa la función para volver a las tarjetas
                showBackButton={!!activeMenu}   // Muestra el botón "Volver" solo si hay un menú activo
            />
            
            <div className="content">
                {/* Si no hay ningún menú activo, muestra las tarjetas de comidas y bebidas */}
                {!activeMenu && (
                    <div className="contenedor">
                        {/* Muestra la tarjeta de comidas si no hay ninguna tarjeta activa o si 'comidas' está activa */}
                        {!activeCard || activeCard === 'comidas' ? (
                            <TarjetaComidas onClick={showMenuComidas} />  // Pasa la función 'showMenuComidas' como prop a la tarjeta de comidas
                        ) : null}
                        {/* Muestra la tarjeta de bebidas si no hay ninguna tarjeta activa o si 'bebidas' está activa */}
                        {!activeCard || activeCard === 'bebidas' ? (
                            <TarjetaBebidas onClick={showMenuBebidas} />  // Pasa la función 'showMenuBebidas' como prop a la tarjeta de bebidas
                        ) : null}
                    </div>
                )}

                {/* Si hay un menú activo, muestra el menú correspondiente y el botón "Volver" */}
                {activeMenu && (
                    <div className="menu-container">
                        {/* Si el menú activo es 'comidas', muestra el componente MenuComidas */}
                        {activeMenu === 'comidas' && <MenuComidas />}
                        {/* Si el menú activo es 'bebidas', muestra el componente MenuBebidas */}
                        {activeMenu === 'bebidas' && <MenuBebidas />}
                        <div className="separador"></div>
                        {/* Botón que permite volver a las tarjetas */}
                        <button className="back-button" onClick={showTarjetas}>
                            Volver <TfiBackLeft />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
