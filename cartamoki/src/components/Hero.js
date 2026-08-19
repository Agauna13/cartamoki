// Hero.js — portada: el cartel de la casa y las dos puertas de entrada a la carta.
import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import styles from './Hero.module.css';
import bebidasImg from './media/689191855_225951638_1024x576.jpeg';
import comidasImg from './media/imagenMokitrokis.jpg';
import sello from './media/logoMokitrokis-Light.png';

const Gateway = ({ index, label, caption, count, unit, image, ink, onClick }) => (
    <button type="button" className={styles.gateway} data-ink={ink} onClick={onClick}>
        <span className={styles.photo} aria-hidden="true">
            <img src={image} alt="" loading="lazy" />
        </span>

        <span className={styles.gatewayBody}>
            <span className={styles.gatewayIndex}>{index}</span>
            <span className={`${styles.gatewayTitle} display`}>{label}</span>
            <span className={styles.gatewayCaption}>{caption}</span>
            <span className={styles.gatewayFoot}>
                <span className={styles.gatewayCount}>
                    {count} {unit}
                </span>
                <LuArrowRight className={styles.gatewayArrow} aria-hidden="true" />
            </span>
        </span>
    </button>
);

const Hero = ({ foodCount, drinkCount, onOpenFood, onOpenDrinks }) => (
    <section className={styles.hero}>
        <div className={styles.poster}>
            <p className={`kicker ${styles.eyebrow}`}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                Hamburguesería · Mallorca
                <span className={styles.eyebrowRule} aria-hidden="true" />
            </p>

            <h1 className={styles.title}>
                <span className="misprint" data-text="Mokitrokis" aria-hidden="true">
                    Mokitrokis
                </span>
                <span className="visually-hidden">Mokitrokis</span>
            </h1>

            <div className={styles.strap}>
                <p className={styles.tagline}>
                    Hamburguesas, pizzas, pa amb oli y todo lo que pide una mesa en la terraza.
                </p>
                <img className={styles.sello} src={sello} alt="" aria-hidden="true" />
            </div>
        </div>

        <div className={styles.gateways}>
            <Gateway
                index="01"
                label="Para comer"
                caption="De la tostada de la mañana a la pizza de la noche."
                count={foodCount}
                unit="platos"
                image={comidasImg}
                ink="ember"
                onClick={onOpenFood}
            />
            <Gateway
                index="02"
                label="Para beber"
                caption="Cafés, cañas bien tiradas, vinos y copas."
                count={drinkCount}
                unit="referencias"
                image={bebidasImg}
                ink="sea"
                onClick={onOpenDrinks}
            />
        </div>
    </section>
);

export default Hero;
