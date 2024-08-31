//Header.js
// src/components/Header.js
import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";
import styles from './Header.module.css';




const Header = ({toggleTheme, isDarkMode }) => {   //aqui faltaría el parametro scrollToReservations presente para que haga el scroll al pulsar el botón
    return (
        <header className={styles.cabecera}>
            <button onClick={toggleTheme} className={styles.icon}>  { isDarkMode? <FaSun /> : <FaMoon /> } </button>
            <h1>MOKITROKIS</h1>
            
        </header>
    );
};

export default Header;

