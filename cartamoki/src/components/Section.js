// Section.js — un bloque de la carta: cabecera plegable y sus platos.
import PropTypes from 'prop-types';
import React from 'react';
import { LuChevronDown } from 'react-icons/lu';
import Estrella from './Estrella';
import styles from './Menu.module.css';
import { formatAmount } from './menuData';
import { normalize } from './menuLogic';

/** Resalta el trozo buscado sin perder los acentos del texto original. */
const Highlight = ({ text, term }) => {
    if (!term) return text;

    const haystack = normalize(text);
    // Si normalizar cambió la longitud, los índices ya no cuadran: mejor no recortar.
    if (haystack.length !== text.length) return text;

    const parts = [];
    let from = 0;
    let at = haystack.indexOf(term);

    while (at !== -1) {
        if (at > from) parts.push(text.slice(from, at));
        parts.push(
            <mark key={at} className={styles.mark}>
                {text.slice(at, at + term.length)}
            </mark>
        );
        from = at + term.length;
        at = haystack.indexOf(term, from);
    }
    parts.push(text.slice(from));

    return parts;
};

const Section = ({ section, number, isOpen, onToggle, query }) => {
    const Icon = section.icon;
    const term = normalize(query.trim());
    const panelId = `${section.id}-panel`;

    const head = (
        <>
            <span className={styles.sectionNumber}>{number}</span>
            <span className={styles.sectionTitle}>{section.title}</span>
            {Icon && <Icon className={styles.sectionIcon} aria-hidden="true" />}
            {onToggle && <LuChevronDown className={styles.sectionChevron} aria-hidden="true" />}
        </>
    );

    return (
        <section id={section.id} className={styles.section}>
            <h2 className={styles.sectionHead}>
                {onToggle ? (
                    <button
                        type="button"
                        className={styles.sectionButton}
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                    >
                        {head}
                    </button>
                ) : (
                    <span className={styles.sectionButton}>{head}</span>
                )}
            </h2>

            <div id={panelId} className={styles.panel} data-open={isOpen || undefined}>
                <div className={styles.panelInner}>
                    {section.note && <p className={styles.note}>{section.note}</p>}

                    <ul className={styles.items}>
                        {section.items.map((item) => (
                            <li
                                key={item.name}
                                className={styles.item}
                                data-modifier={item.modifier || undefined}
                            >
                                <div className={styles.itemHead}>
                                    <h3 className={styles.itemName}>
                                        {item.modifier && (
                                            <span className={styles.plus} aria-hidden="true">
                                                +
                                            </span>
                                        )}
                                        <Highlight text={item.name} term={term} />
                                        {item.house && (
                                            <>
                                                <Estrella className={styles.star} />
                                                <span className="visually-hidden">(receta de la casa)</span>
                                            </>
                                        )}
                                    </h3>

                                    {/* Puntillo de guía: lleva el ojo del plato al precio. */}
                                    <span className={styles.leader} aria-hidden="true" />

                                    <p className={styles.itemPrice}>
                                        {formatAmount(item.price)}
                                        <span className={styles.euro} aria-hidden="true">
                                            €
                                        </span>
                                    </p>
                                </div>

                                {item.desc && (
                                    <p className={styles.itemDesc}>
                                        <Highlight text={item.desc} term={term} />
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

Section.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        note: PropTypes.string,
        icon: PropTypes.elementType,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                desc: PropTypes.string,
                price: PropTypes.number.isRequired,
                modifier: PropTypes.bool,
                house: PropTypes.bool
            })
        ).isRequired
    }).isRequired,
    number: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func,
    query: PropTypes.string
};

export default Section;
