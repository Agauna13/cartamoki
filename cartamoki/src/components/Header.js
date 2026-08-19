// Header.js — cabecera fija: volver, marca y cambio de tinta (claro/oscuro).
import React from 'react';
import { LuArrowLeft, LuMoon, LuSun } from 'react-icons/lu';
import styles from './Header.module.css';

const Header = ({ theme, toggleTheme, onHome, showBack, innerRef }) => {
    const isDark = theme === 'dark';

    return (
        <header ref={innerRef} className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.slot}>
                    {showBack && (
                        <button type="button" className={styles.action} onClick={onHome}>
                            <LuArrowLeft aria-hidden="true" />
                            <span className={styles.actionLabel}>Volver</span>
                        </button>
                    )}
                </div>

                <button type="button" className={styles.wordmark} onClick={onHome}>
                    <span className="misprint" data-text="Mokitrokis" aria-hidden="true">
                        Mokitrokis
                    </span>
                    <span className="visually-hidden">Mokitrokis — volver al inicio</span>
                </button>

                <div className={`${styles.slot} ${styles.slotEnd}`}>
                    <button
                        type="button"
                        className={styles.action}
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        title={isDark ? 'Modo claro' : 'Modo oscuro'}
                    >
                        {isDark ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
