// menuData.js — fuente única de verdad de la carta.
//
// Los precios se guardan como número (euros) y se formatean en un solo sitio
// (formatPrice), así no vuelven a convivir "2.20€" y "2,20€" en la misma carta.
// `desc` es la composición del plato; `modifier: true` marca los extras, que se
// pintan más discretos y con "+" delante; `house: true` marca las recetas que
// llevan el nombre de la casa (Mokitrokis) o el de su línea (Dimonis), y les
// pone una estrella en la carta.

import { FaWhiskeyGlass } from 'react-icons/fa6';
import { GiChiliPepper, GiCoffeeCup, GiHamburger, GiHotDog, GiNachos, GiOlive, GiSandwich } from 'react-icons/gi';
import { GrToast } from 'react-icons/gr';
import { IoLogoFreebsdDevil } from 'react-icons/io';
import { IoMdBeer } from 'react-icons/io';
import { LuPizza, LuSalad, LuSandwich } from 'react-icons/lu';
import { MdDinnerDining } from 'react-icons/md';

/** 7 -> "7,00" — el símbolo se pinta aparte para poder atenuarlo. */
export const formatAmount = (value) => value.toFixed(2).replace('.', ',');

export const formatPrice = (value) => `${formatAmount(value)} €`;

/* --- Para comer ---------------------------------------------------------- */

export const foodSections = [
    {
        id: 'tostadas',
        title: 'Tostadas',
        icon: GrToast,
        items: [
            { name: 'Tomate o mantequilla', price: 1.7 },
            { name: 'Pan moreno y tomate', price: 1.9 },
            { name: 'Mantequilla y mermelada', desc: 'Pan de barra o Bimbo', price: 1.7 },
            { name: 'Pan moreno y aguacate', price: 4.1 },
            { name: 'Ingrediente extra', desc: 'Queso, atún, serrano, york o camaiot', price: 1.0, modifier: true },
            { name: 'Huevo o beicon', price: 1.3, modifier: true }
        ]
    },
    {
        id: 'bocadillos',
        title: 'Bocadillos',
        icon: GiSandwich,
        note: 'A elegir entre atún, queso, jamón york, jamón serrano, camaiot o sobrasada.',
        items: [
            { name: '1 ingrediente', price: 4.5 },
            { name: '2 ingredientes', price: 5.0 },
            { name: 'Tortilla francesa', price: 5.5 },
            { name: 'Beicon y queso', price: 6.0 },
            { name: 'Ingrediente extra', price: 1.0, modifier: true }
        ]
    },
    {
        id: 'sandwiches',
        title: 'Sándwiches y pepitos',
        icon: LuSandwich,
        items: [
            { name: 'Pepito de lomo o pollo', price: 6.5 },
            { name: 'Pepito de lomo y pollo completo', price: 8.0 },
            {
                name: 'Pepito tradicional Dimonis',
                house: true,
                desc: 'Lomo, pimiento verde asado, tortilla francesa, tomate, lechuga y salsa Dimonis',
                price: 8.0
            },
            {
                name: 'Pepito Mokitrokis',
                house: true,
                desc: 'Lomo o pollo, beicon, queso, cebolla pochada, huevo, tomate y lechuga',
                price: 8.0
            },
            {
                name: 'Sándwich de pollo o atún',
                desc: 'Huevo a la plancha, queso, tomate, lechuga y salsa César',
                price: 7.5
            },
            {
                name: 'Sándwich Dimonis',
                house: true,
                desc: 'Pollo, beicon, queso, lechuga, tomate y salsa Dimonis',
                price: 8.0
            },
            { name: 'Sándwich mixto', desc: 'York y queso', price: 4.5 },
            { name: 'Ingrediente extra: beicon y queso', price: 1.0, modifier: true }
        ]
    },
    {
        id: 'entrantes',
        title: 'Entrantes',
        icon: GiNachos,
        items: [
            { name: 'Croquetas de pollo', price: 6.0 },
            { name: 'Calamares a la romana', price: 6.0 },
            { name: 'Fingers de pollo', price: 8.0 },
            { name: 'Nachos Mokitrokis', desc: 'Queso, carne picada, tomate y especias', price: 8.0, house: true },
            { name: 'Nachos con mozzarella', price: 5.0 },
            { name: 'Nachos 4 quesos', price: 6.0 },
            { name: 'Bravas', price: 6.0 },
            { name: 'Patatas con beicon', desc: 'Beicon, cebolla pochada y mozzarella', price: 8.0 },
            { name: 'Patatas 4 quesos', price: 7.0 },
            { name: 'Ración de patatas', price: 3.8 },
            { name: 'Ración de patata teja', price: 3.5 },
            { name: 'Ración de boniato', price: 4.5 },
            { name: 'Verduras en tempura', price: 6.0 }
        ]
    },
    {
        id: 'perritos',
        title: 'Perritos y hamburguesas',
        icon: GiHotDog,
        items: [
            { name: 'Perrito normal', desc: 'Cebolla crujiente', price: 4.0 },
            { name: 'Perrito lechero', desc: 'Tortilla francesa', price: 5.0 },
            {
                name: 'Perrito Dimonis',
                house: true,
                desc: 'Beicon, queso, cebolla crujiente y salsa tradicional Dimonis',
                price: 5.5
            },
            {
                name: 'Perrito Mokitrokis',
                house: true,
                desc: 'Queso, cebolla crujiente, pepinillo picado y salsa Mokitrokis',
                price: 5.5
            },
            { name: 'Hamburguesa con queso', price: 5.0 },
            { name: 'Hamburguesa con queso y beicon', price: 6.0 },
            {
                name: 'Hamburguesa Mokitrokis',
                house: true,
                desc: 'Beicon, huevo, cebolla pochada, queso cheddar y salsa Mokitrokis',
                price: 7.0
            },
            {
                name: 'Hamburguesa Dimonis',
                house: true,
                desc: 'Queso, beicon, huevo, cebolla crujiente y salsa Dimonis',
                price: 7.0
            },
            {
                name: 'Hamburguesa de cabra',
                desc: 'Pan brioche, queso de cabra, cebolla pochada y mermelada de arándanos',
                price: 11.0
            },
            { name: 'Hamburguesa de pollo rebozado', desc: 'Pan brioche y queso cheddar', price: 12.0 },
            {
                name: 'Hamburguesa vegetariana',
                desc: 'Hamburguesa de berenjena, cebolla pochada y mermelada de arándanos',
                price: 11.0
            }
        ]
    },
    {
        id: 'especiales',
        title: 'Hamburguesas especiales',
        icon: GiHamburger,
        items: [
            {
                name: 'La Rafaelo',
                desc: 'Pan brioche, doble carne smash, cheddar, cebolla pochada, beicon, huevo y salsa de mostaza y miel',
                price: 12.0
            },
            {
                name: 'La Big-Burger',
                desc: 'Pan brioche, doble carne smash, cheddar, pepinillo picado, cebolla crujiente y salsa burger',
                price: 12.0
            },
            {
                name: 'La Angus',
                desc: 'Pan brioche, 120 g de carne Angus, cheddar, cebolla pochada y huevo',
                price: 12.0
            }
        ]
    },
    {
        id: 'paamboli',
        title: 'Pa amb oli',
        icon: GiOlive,
        items: [
            { name: 'Mixto', desc: 'Serrano y queso', price: 10.0 },
            { name: 'Mallorquín', desc: 'Panceta, sobrasada y camaiot', price: 13.0 },
            { name: 'Cabrero', desc: 'Lomo y queso de cabra', price: 13.0 },
            { name: 'Marinero', desc: 'Anchoas y atún', price: 13.0 }
        ]
    },
    {
        id: 'fajitas',
        title: 'Fajitas',
        icon: GiChiliPepper,
        items: [
            {
                name: 'Pollo rebozado o a la plancha',
                desc: 'Mozzarella, lechuga, tomate y salsa César, con patatas',
                price: 13.0
            },
            { name: 'Vegetal de atún', desc: 'Lechuga, tomate, huevo a la plancha y mayonesa', price: 13.0 },
            {
                name: 'Vegana',
                desc: 'Berenjena, cebolla pochada, pimiento rojo y verde asado, con patatas teja',
                price: 13.0
            }
        ]
    },
    {
        id: 'ensaladas',
        title: 'Ensaladas',
        icon: LuSalad,
        items: [
            { name: 'César', desc: 'Lechuga, tomate, queso, pollo rebozado, picatostes y salsa César', price: 10.0 },
            { name: 'Cabra', desc: 'Lechuga, tomate, cebolla crujiente, queso de cabra y nueces', price: 12.0 },
            { name: 'Mixta', desc: 'Lechuga, tomate, york, queso, atún y cebolla', price: 9.0 }
        ]
    },
    {
        id: 'menus',
        title: 'Nuestros menús',
        icon: IoLogoFreebsdDevil,
        note: 'Todos con patatas teja y bebida de lata.',
        items: [
            { name: 'Menú hamburguesa Dimonis o Mokitrokis', price: 12.0, house: true },
            { name: 'Menú perrito Dimonis o Mokitrokis', desc: 'Dos perritos a elegir', price: 12.0, house: true },
            { name: 'Menú pepito Dimonis o Mokitrokis', price: 12.0, house: true }
        ]
    },
    {
        id: 'combinados',
        title: 'Platos combinados',
        icon: MdDinnerDining,
        items: [
            { name: 'Pollo o lomo a la plancha', desc: 'Con ensalada, huevos y patatas', price: 11.0 },
            { name: 'Pollo rebozado', desc: 'Con ensalada y patatas', price: 12.0 },
            { name: 'Pollo a la plancha con beicon y queso', desc: 'Con patatas teja', price: 14.0 }
        ]
    },
    {
        id: 'pizzas',
        title: 'Pizzas',
        icon: LuPizza,
        items: [
            { name: 'Margarita', desc: 'Tomate y mozzarella', price: 9.5 },
            { name: 'Prosciutto', desc: 'Tomate, york y mozzarella', price: 10.0 },
            { name: '4 quesos', desc: 'Mozzarella, edam, cheddar y roquefort', price: 10.0 },
            { name: 'Romana', desc: 'Mozzarella, champiñones, pimiento, beicon y pollo', price: 13.0 },
            { name: 'Vegetariana', desc: 'Mozzarella, espinacas, cebolla y queso de cabra', price: 13.0 },
            { name: 'Cabra', desc: 'Mozzarella, sobrasada, queso de cabra y miel', price: 13.0 },
            { name: 'Barbacoa', desc: 'Mozzarella, carne picada, beicon y salsa barbacoa', price: 13.0 },
            { name: 'Carbonara', desc: 'Mozzarella, beicon, champiñones, cebolla y nata', price: 13.0 },
            { name: 'Dimonis', desc: 'Mozzarella, carne picada, pimiento y salsa Dimonis', price: 13.0, house: true },
            { name: 'Mokitrokis', desc: 'Mozzarella, camaiot, lomo y roquefort', price: 13.0, house: true }
        ]
    }
];

/* --- Para beber ---------------------------------------------------------- */

export const drinkSections = [
    {
        id: 'calientes',
        title: 'Bebidas calientes',
        icon: GiCoffeeCup,
        items: [
            { name: 'Café solo', price: 1.3 },
            { name: 'Cortado', price: 1.4 },
            { name: 'Café con leche', price: 1.6 },
            { name: 'Carajillo', price: 2.0 },
            { name: 'Café bombón', price: 2.5 },
            { name: 'Chocolate caliente', price: 3.0 },
            { name: 'Infusión', price: 1.6 }
        ]
    },
    {
        id: 'frias',
        title: 'Bebidas frías',
        icon: IoMdBeer,
        items: [
            { name: 'Refresco de lata', price: 2.2 },
            { name: 'Nestea o Aquarius de lata', price: 2.5 },
            { name: 'Refresco de botella', price: 2.6 },
            { name: 'Nestea o Aquarius de botella', price: 2.8 },
            { name: 'Caña pequeña', price: 1.9 },
            { name: 'Caña grande', price: 2.1 },
            { name: 'Jarra', price: 3.0 },
            { name: 'Cerveza de botella', price: 2.5 },
            { name: 'Cerveza de botella reserva', price: 2.8 },
            { name: 'Alhambra Verde', price: 2.8 },
            { name: 'Daura', desc: 'Sin gluten', price: 2.8 },
            { name: 'Estrella Damm', price: 2.5 },
            { name: 'Estrella Damm 0,0', price: 2.5 },
            { name: 'Estrella Galicia', price: 2.5 },
            { name: 'Mahou', price: 2.5 },
            { name: 'Heineken', price: 2.5 },
            { name: 'Copa de vino tinto Rioja crianza', price: 2.8 },
            { name: 'Copa de vino blanco Verdejo', price: 2.8 },
            { name: 'Botella de vino', price: 9.0 },
            { name: 'Agua 1,5 L', price: 2.0 },
            { name: 'Agua 0,5 L', price: 1.5 }
        ]
    },
    {
        id: 'licores',
        title: 'Licores',
        icon: FaWhiskeyGlass,
        items: [
            { name: 'Copa pequeña', price: 2.5 },
            { name: 'Copa grande', price: 3.0 },
            { name: 'Chupitos', price: 2.2 },
            { name: 'Cubata', price: 7.0 },
            { name: 'Cubata especial', price: 8.5 },
            { name: 'Red Bull', price: 0.5, modifier: true }
        ]
    }
];
