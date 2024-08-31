// menuLogic.js
import { useState } from 'react';

export const useMenuToggle = () => {
    const [visibleSections, setVisibleSections] = useState({
        drinks: false,
        hot: false,
        cold: false,
        liquor: false,
        food: false,
        toast: false,
        bocatas : false,
        sanpepis: false,
        entrantes: false,
        perriguesas: false,
        hamburguesasEspeciales: false,
        paAmbOli: false,
        fajitas: false,
        ensaladas: false,
        veganos: false,
        menusMokiItems: false,
        platosCombinados: false,
        pizza: false,
        reserva: false,
        desserts: false
        
    });

    const toggleSection = (section) => {
        setVisibleSections(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return { visibleSections, toggleSection };
};



