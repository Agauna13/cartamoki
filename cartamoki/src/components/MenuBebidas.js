// Menu.js
import React from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import { IoMdBeer } from "react-icons/io";
import { FaWhiskeyGlass } from "react-icons/fa6";
import styles from './Menu.module.css';
import Subsection from './Subsection.js';
import { coldDrinks, hotDrinks, spiritDrinks } from './menuData.js';
import { useMenuToggle } from './menuLogic.js';


const MenuBebidas = () => {
    const { visibleSections, toggleSection } = useMenuToggle();

    return (
        <>
            <h1>NUESTRAS BEBIDAS</h1>
            <div className = "separador"></div>
            <div className={styles.desplegables}>
                <h3 className={styles.numero} onClick={() => toggleSection('hot')}>BEBIDAS CALIENTES <GiCoffeeCup /></h3>
                <div className={`${styles.contenedor} ${visibleSections.hot ? styles.mostrar : ''}`}>
                    <Subsection title="" items={hotDrinks} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('cold')}>REFRESCOS Y CERVEZAS <IoMdBeer /></h3>
                <div className={`${styles.contenedor} ${visibleSections.cold ? styles.mostrar : ''}`}>
                    <Subsection title="" items={coldDrinks} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('liquor')}>LICORES <FaWhiskeyGlass /></h3>
                <div className={`${styles.contenedor} ${visibleSections.liquor ? styles.mostrar : ''}`}>
                    <Subsection title="" items={spiritDrinks} />
                </div>

            </div>

        </>
    );
};

export default MenuBebidas;

