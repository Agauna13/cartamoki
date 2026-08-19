// MenuView.js — la carta: cartel de sección, buscador, rail de navegación y bloques.
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LuChevronsDownUp, LuChevronsUpDown, LuSearch, LuX } from 'react-icons/lu';
import styles from './Menu.module.css';
import Estrella from './Estrella';
import Section from './Section';
import { useMeasuredHeight, useMenuSearch, useScrollSpy, useSectionToggle } from './menuLogic';

const MenuView = ({ index, title, tagline, ink, sections }) => {
    const [query, setQuery] = useState('');

    const { sections: visibleSections, isFiltering, matchCount } = useMenuSearch(sections, query);
    const { isOpen, toggleSection, openAll, closeAll, allClosed } = useSectionToggle(sections);

    const visibleIds = useMemo(() => visibleSections.map((section) => section.id), [visibleSections]);
    const hasHouseDishes = useMemo(
        () => sections.some((section) => section.items.some((item) => item.house)),
        [sections]
    );
    const toolbarRef = useMeasuredHeight('--railbar-h');
    const activeId = useScrollSpy(visibleIds, toolbarRef);

    const railRef = useRef(null);
    const chipRefs = useRef({});

    // El chip de la sección que estás leyendo se mantiene siempre a la vista.
    useEffect(() => {
        const rail = railRef.current;
        const chip = chipRefs.current[activeId];
        if (!rail || !chip) return;

        rail.scrollTo({
            left: chip.offsetLeft - rail.clientWidth / 2 + chip.offsetWidth / 2,
            behavior: 'smooth'
        });
    }, [activeId]);

    const goToSection = useCallback(
        (id) => {
            if (!isOpen(id)) toggleSection(id);
            // Espera al repintado para medir la posición ya con la sección abierta.
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        },
        [isOpen, toggleSection]
    );

    let resultsLabel = `Sin resultados para «${query}».`;
    if (matchCount === 1) resultsLabel = `1 plato para «${query}».`;
    else if (matchCount > 1) resultsLabel = `${matchCount} platos para «${query}».`;

    return (
        <div className={styles.view} data-ink={ink}>
            <header className={styles.poster}>
                <p className={`kicker ${styles.posterKicker}`}>
                    Carta {index} <span aria-hidden="true">·</span> Mokitrokis
                </p>
                <h1 className={styles.posterTitle}>
                    <span className="misprint" data-text={title} aria-hidden="true">
                        {title}
                    </span>
                    <span className="visually-hidden">{title}</span>
                </h1>
                <p className={styles.posterTagline}>{tagline}</p>

                {hasHouseDishes && (
                    <p className={styles.legend}>
                        <Estrella className={styles.legendStar} />
                        Recetas con el nombre de la casa
                    </p>
                )}
            </header>

            <div ref={toolbarRef} className={styles.toolbar}>
                <div className={styles.toolbarInner}>
                    <div className={styles.search}>
                        <LuSearch className={styles.searchIcon} aria-hidden="true" />
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Buscar en la carta…"
                            aria-label="Buscar en la carta"
                            className={styles.searchInput}
                        />
                        {query && (
                            <button
                                type="button"
                                className={styles.searchClear}
                                onClick={() => setQuery('')}
                                aria-label="Borrar búsqueda"
                            >
                                <LuX aria-hidden="true" />
                            </button>
                        )}
                    </div>

                    <button
                        type="button"
                        className={styles.foldAll}
                        onClick={allClosed ? openAll : closeAll}
                        disabled={isFiltering}
                    >
                        {allClosed ? <LuChevronsUpDown aria-hidden="true" /> : <LuChevronsDownUp aria-hidden="true" />}
                        <span className={styles.foldAllLabel}>{allClosed ? 'Desplegar' : 'Plegar'} todo</span>
                    </button>
                </div>

                {!isFiltering && (
                    <nav ref={railRef} className={styles.rail} aria-label="Secciones de la carta">
                        {visibleSections.map((section) => (
                            <button
                                key={section.id}
                                type="button"
                                ref={(node) => {
                                    chipRefs.current[section.id] = node;
                                }}
                                className={styles.chip}
                                data-active={section.id === activeId || undefined}
                                onClick={() => goToSection(section.id)}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                )}
            </div>

            {isFiltering && (
                <output className={styles.results}>{resultsLabel}</output>
            )}

            <div className={styles.sections}>
                {visibleSections.map((section, position) => (
                    <Section
                        key={section.id}
                        section={section}
                        number={String(position + 1).padStart(2, '0')}
                        isOpen={isFiltering || isOpen(section.id)}
                        onToggle={isFiltering ? undefined : () => toggleSection(section.id)}
                        query={isFiltering ? query : ''}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuView;
