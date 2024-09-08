//Header.js
// src/components/Header.js
import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa6";
import styles from  './Header.module.css';
import { TfiBackLeft } from "react-icons/tfi";




const Header = ({toggleTheme, isDarkMode, showTarjetas }) => {   //aqui faltaría el parametro scrollToReservations presente para que haga el scroll al pulsar el botón
  

    return (
        <header className={styles.cabecera}>
            <button onClick={toggleTheme} className={styles.icon}>  { isDarkMode? <FaSun /> : <FaMoon /> } </button>
            <h1 className="titulo" onClick = {showTarjetas}>MOKITROKIS</h1>
            <button className="back" onClick ={showTarjetas}>Volver <TfiBackLeft /></button>
            
        </header>
    );
};

export default Header;

