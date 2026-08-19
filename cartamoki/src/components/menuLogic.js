// menuLogic.js — hooks de comportamiento de la carta.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const THEME_KEY = 'moki-theme';

/** Quita tildes y pasa a minúsculas para que "cafe" encuentre "Café". */
export const normalize = (text) =>
    text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

/* --- Tema ---------------------------------------------------------------- */

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        const saved = window.localStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(THEME_KEY, theme);

        // Que la barra del navegador en móvil acompañe al papel de la carta.
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#12100d' : '#f6f0e1');
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, toggleTheme };
};

/* --- Plegado de secciones ------------------------------------------------ */

/** Arranca con todo desplegado: una carta se lee de arriba abajo, no se abre a clics. */
export const useSectionToggle = (sections) => {
    const [closedIds, setClosedIds] = useState(() => new Set());

    const toggleSection = useCallback((id) => {
        setClosedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);

    const openAll = useCallback(() => setClosedIds(new Set()), []);
    const closeAll = useCallback(() => setClosedIds(new Set(sections.map((s) => s.id))), [sections]);

    const isOpen = useCallback((id) => !closedIds.has(id), [closedIds]);
    const allClosed = closedIds.size === sections.length;

    return { isOpen, toggleSection, openAll, closeAll, allClosed };
};

/* --- Buscador ------------------------------------------------------------ */

/** Filtra platos por nombre o composición, conservando el orden de la carta. */
export const useMenuSearch = (sections, query) => {
    return useMemo(() => {
        const term = normalize(query.trim());
        if (!term) return { sections, isFiltering: false, matchCount: null };

        const filtered = [];
        let matchCount = 0;

        sections.forEach((section) => {
            const items = section.items.filter(
                (item) => normalize(item.name).includes(term) || (item.desc && normalize(item.desc).includes(term))
            );
            // Si el nombre de la sección coincide, se muestra entera.
            if (normalize(section.title).includes(term)) {
                matchCount += section.items.length;
                filtered.push(section);
            } else if (items.length) {
                matchCount += items.length;
                filtered.push({ ...section, items });
            }
        });

        return { sections: filtered, isFiltering: true, matchCount };
    }, [sections, query]);
};

/* --- Sección activa según el scroll -------------------------------------- */

/**
 * Marca qué sección está bajo la línea de lectura. Se recalcula con rAF en vez
 * de con IntersectionObserver porque el alto cambia al plegar o al filtrar.
 *
 * `stickyRef` apunta a la barra fija: la línea de lectura va justo debajo de
 * ella, o el chip activo se quedaría marcando una sección ya tapada.
 */
export const useScrollSpy = (ids, stickyRef) => {
    const [activeId, setActiveId] = useState(ids[0] ?? null);
    const frame = useRef(0);

    useEffect(() => {
        if (!ids.length) {
            setActiveId(null);
            return undefined;
        }

        const measure = () => {
            frame.current = 0;
            let current = ids[0];

            const line = (stickyRef?.current?.getBoundingClientRect().bottom ?? 0) + 8;

            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top - line <= 0) current = id;
            }

            // Al final del documento, gana siempre la última sección.
            const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
            setActiveId(atBottom ? ids[ids.length - 1] : current);
        };

        const onScroll = () => {
            if (frame.current) return;
            frame.current = window.requestAnimationFrame(measure);
        };

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame.current) window.cancelAnimationFrame(frame.current);
        };
    }, [ids, stickyRef]);

    return activeId;
};

/** Publica la altura real de un elemento fijo como variable CSS. */
export const useMeasuredHeight = (cssVar) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const apply = () => document.documentElement.style.setProperty(cssVar, `${el.offsetHeight}px`);
        apply();

        const observer = new ResizeObserver(apply);
        observer.observe(el);

        return () => {
            observer.disconnect();
            // Sin el elemento en pantalla la variable debe volver a cero, o el
            // scroll-padding sigue reservando sitio para una barra que ya no está.
            document.documentElement.style.setProperty(cssVar, '0px');
        };
    }, [cssVar]);

    return ref;
};
