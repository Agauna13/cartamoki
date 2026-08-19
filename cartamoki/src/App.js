import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuView from './components/MenuView';
import { drinkSections, foodSections } from './components/menuData';
import { useMeasuredHeight, useTheme } from './components/menuLogic';

/** Los extras ("+ huevo") no son platos: no cuentan en el recuento de portada. */
const countDishes = (sections) =>
    sections.reduce((total, section) => total + section.items.filter((item) => !item.modifier).length, 0);

/** La vista vive en el hash: así el "atrás" del móvil funciona y un QR puede
 *  apuntar directo a la carta de comidas o a la de bebidas. */
const readView = () => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'comer' || hash === 'beber' ? hash : 'home';
};

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const [view, setView] = useState(readView);

    const headerRef = useMeasuredHeight('--header-h');

    const foodCount = useMemo(() => countDishes(foodSections), []);
    const drinkCount = useMemo(() => countDishes(drinkSections), []);

    useEffect(() => {
        const sync = () => {
            setView(readView());
            window.scrollTo({ top: 0 });
        };
        window.addEventListener('hashchange', sync);
        return () => window.removeEventListener('hashchange', sync);
    }, []);

    // La tinta se fija en la raíz para que también tiñan cabecera y pie.
    useEffect(() => {
        document.documentElement.dataset.ink = view === 'beber' ? 'sea' : 'ember';
    }, [view]);

    // Navegar = cambiar el hash; el listener de arriba se encarga del resto.
    const show = useCallback((next) => {
        window.location.hash = next === 'home' ? '' : next;
        if (next === 'home') window.scrollTo({ top: 0 });
    }, []);

    const goHome = useCallback(() => show('home'), [show]);

    return (
        <>
            <Header
                innerRef={headerRef}
                theme={theme}
                toggleTheme={toggleTheme}
                onHome={goHome}
                showBack={view !== 'home'}
            />

            {/* La key fuerza el remontaje: cada vista entra con su propia animación. */}
            <main key={view} className="view-enter">
                {view === 'home' && (
                    <Hero
                        foodCount={foodCount}
                        drinkCount={drinkCount}
                        onOpenFood={() => show('comer')}
                        onOpenDrinks={() => show('beber')}
                    />
                )}

                {view === 'comer' && (
                    <MenuView
                        index="01"
                        title="Para comer"
                        tagline="Todo se prepara al momento. Si tienes alguna alergia o intolerancia, dínoslo y lo miramos contigo."
                        ink="ember"
                        sections={foodSections}
                    />
                )}

                {view === 'beber' && (
                    <MenuView
                        index="02"
                        title="Para beber"
                        tagline="Cañas bien tiradas, cafés de barra y una copa para rematar la mesa."
                        ink="sea"
                        sections={drinkSections}
                    />
                )}
            </main>

            <Footer onHome={goHome} showHome={view !== 'home'} />
        </>
    );
};

export default App;
