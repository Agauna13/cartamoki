// Footer.js — pie de carta: la letra pequeña y la vuelta al inicio.
import React from 'react';
import { LuArrowUp } from 'react-icons/lu';
import styles from './Footer.module.css';
import marca from './media/M.png';

const Footer = ({ onHome, showHome }) => (
    <footer className={`${styles.footer} tiled`}>
        <div className={styles.inner}>
            <img className={styles.marca} src={marca} alt="" aria-hidden="true" />

            <p className={styles.legal}>
                Precios en euros, IVA incluido.
                <br />
                Consulta al personal sobre alérgenos e intolerancias.
            </p>

            {showHome && (
                <button type="button" className={styles.top} onClick={onHome}>
                    <LuArrowUp aria-hidden="true" />
                    Volver al inicio
                </button>
            )}
        </div>
    </footer>
);

export default Footer;
