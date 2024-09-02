// Menu.js
import React from 'react';
import { GrToast } from "react-icons/gr";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { MdDinnerDining } from "react-icons/md";
import { LuSandwich, LuSalad, LuVegan, LuPizza } from "react-icons/lu";
import { GiNachos, GiHotDog, GiHamburger, GiSandwich, GiOlive, GiChiliPepper } from "react-icons/gi";

import styles from './Menu.module.css';
import Subsection from './Subsection.js';
import { bocadilloItems, ensaladaItems, entrantesItems, fajitaItems, hamburgPerritoItems, hamburguesasEspecialesItems, menusMokiItems, paAmbOliItems, pepiSandwichItems, pizzaItems, platoCombinadoItems, toastItems, veganoItems } from './menuData.js';
import { useMenuToggle } from './menuLogic.js';


const MenuComidas = () => {
    const { visibleSections, toggleSection } = useMenuToggle();

    return (
        <>
            <h1>PARA COMER</h1>
            <div className = "separador"></div>
            <div className={styles.desplegables}>
                <h3 className={styles.numero} onClick={() => toggleSection('toast')}>TOSTADAS <GrToast /></h3>
                <div className={`${styles.contenedor} ${visibleSections.toast ? styles.mostrar : ''}`}>
                    <Subsection title="" items={toastItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('bocatas')}>BOCADILLOS <GiSandwich />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.bocatas ? styles.mostrar : ''}`}>
                    <h4>Bocadillo a elegir entre atún, queso, serrano, York, camaiot o sobrasada:</h4>
                    <Subsection title="" items={bocadilloItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('sanpepis')}>SANDWICHES Y PEPITOS <LuSandwich />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.sanpepis ? styles.mostrar : ''}`}>
                    <Subsection title="" items={pepiSandwichItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('entrantes')}>ENTRANTES <GiNachos />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.entrantes ? styles.mostrar : ''}`}>
                    <Subsection title="" items={entrantesItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('perriguesas')}>PERRITOS Y HAMBURGUESAS <GiHotDog />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.perriguesas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={hamburgPerritoItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('hamburguesasEspeciales')}>NUESTRAS HAMBURGUESAS ESPECIALES <GiHamburger />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.hamburguesasEspeciales ? styles.mostrar : ''}`}>
                    <Subsection title="" items={hamburguesasEspecialesItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('paAmbOli')}>PA AMB OLI <GiOlive />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.paAmbOli ? styles.mostrar : ''}`}>
                    <Subsection title="" items={paAmbOliItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('fajitas')}>FAJITAS <GiChiliPepper />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.fajitas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={fajitaItems} />
                </div>

                <h3 className={styles.numero} onClick={() => toggleSection('ensaladas')}>ENSALADAS <LuSalad />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.ensaladas ? styles.mostrar : ''}`}>
                    <Subsection title="" items={ensaladaItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('veganos')}>NUESTROS VEGANOS <LuVegan />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.veganos ? styles.mostrar : ''}`}>
                    <Subsection title="" items={veganoItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('menusMoki')}>NUESTROS MENUS MOKITROKIS O TRADICIONAL DIMONIS <IoLogoFreebsdDevil />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.menusMoki ? styles.mostrar : ''}`}>
                    <Subsection title="" items={menusMokiItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('platosCombinados')}>PLATOS COMBINADOS <MdDinnerDining />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.platosCombinados ? styles.mostrar : ''}`}>
                    <Subsection title="" items={platoCombinadoItems} />
                </div>
                <h3 className={styles.numero} onClick={() => toggleSection('pizza')}>PIZZAS <LuPizza />
                </h3>
                <div className={`${styles.contenedor} ${visibleSections.pizza ? styles.mostrar : ''}`}>
                    <Subsection title="" items={pizzaItems} />
                </div>
                
                
            </div>
        </>
    );
};

export default MenuComidas;


/*
<h3 className={styles.numero} onClick={() => toggleSection('desserts')}>POSTRES</h3>
<div className={`${styles.contenedor} ${visibleSections.desserts ? styles.mostrar : ''}`}>
                    <Subsection title="" items={dessertItems} />
                </div>    pendiente Revisar y ver si ponen postres en la carta*/
