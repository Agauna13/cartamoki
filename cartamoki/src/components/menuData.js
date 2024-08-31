//menuData.js
			// Lista de bebidas calientes
			export const hotDrinks = [
				{ name: 'Café solo', price: '1,10€' },
				{ name: 'Cortado', price: '1,20€' },
				{ name: 'Café con leche', price: '1,40€' },
				{ name: 'Carajillo', price: '1,80€' },
				{ name: 'Café Bombón', price: '2,00€' },
				{ name: 'Chocolate caliente', price: '2,50€' },
				{ name: 'Infusión', price: '1,40€' }
			];

			// Lista de bebidas frías con sus nombres y precios
			export const coldDrinks = [
				{ name: 'Refresco lata', price: '1,90€' },
				{ name: 'Refresco Botella', price: '2,20€' },
				{ name: 'Caña pequeña', price: '1,70€' },
				{ name: 'Caña Mediana', price: '1,90€' },
				{ name: 'Jarra', price: '2,80€' },
				{ name: 'Alhambra verde', price: '2,50€' },
				{ name: 'Estrella Damm', price: '2,20€' },
				{ name: 'Daura (Sin gluten)', price: '2,50€' },
				{ name: 'Estrella Damm 0,0', price: '2,20€' },
				{ name: 'Estrella Galicia', price: '2,20€' },
				{ name: 'Mahou', price: '2,00€' },
				{name: 'Heineken', price: '2,50€'},
				{name: 'Copa de vino tinto Rioja Crianza', price: '2,20€'},
				{name: 'Copa de vino blanco Verdejo', price: '2,20€'},
				{name: 'Botella de vino', price: '9,00€'},
				{name: 'Agua 0.5L', price: '1,30€'},
				{name: 'Agua 1.5L', price: '1.90'}
				
			];


			//Lista de licores
			export const spiritDrinks = [
				{ name: 'Copa pequeña', price: '2.20€' },
				{ name: 'Copa grande', price: '2.80€' },
				{ name: 'Chupitos', price: '2.00€' },
				{ name: 'Cubata', price: '6.50€' },
				{ name: 'Cubata especial', price: '8.50€' },
				{ name: '+Red Bull', price: '0.50€' }
			];



			//lista de Comidas
			export const toastItems = [
				{name: 'Tomate', price: '1,40€'},
				{name: 'Pan moreno y tomate', price: '1,50€'},
				{name: 'Mantequilla y mermelada (Pan de barra o Bimbo)', price: '1,50€'},
				{name: 'Pan moreno y aguacate', price: '3,20€'},
				{name: '  +Ing. extra: queso, atún, serrano, York o camaiot', price: '0,80€'},
				{name: '  +Huevo', price: '1,00€'},
				{name: '  +Bacon', price: '1,00€'}
			]

			export const bocadilloItems = [
				//acordarse de poner encabezamiento => Bocadillo de atún, queso, serrano, York, camaiot o sobrasada: \n
				{name: 'Bocadillo de atún, queso, serrano, York, camaiot o sobrasada:', price:''},
				{name: '  1 Ingrediente', price: '3,50€'},
				{name: '  2 Ingredientes', price: '4,00€'},
				{name: 'Tortilla Francesa', price: '4,50€'},
				{name: '  +Ingrediente extra', price: '0,80€'},
				{name: 'Bacon y queso', price: '4,50€'}

			]

			export const pepiSandwichItems = [
				{name: 'Pepito de lomo o pollo', price: '5,50€'},
				{name: '  +Ingreidente extra: bacon y queso', price: '1,00€'},
				{name: 'Pepito tradicional Dimonis \n  (Con lomo, pimiento verde asado, tortilla francesa, salsa Dimonis, tomate y lechuga)', price: '6,50€'},
				{name: 'Pepito Mokitrokis \n  (Con lomo o pollo, bacon, queso, cebolla pochada, huevo, tomate y lechuga)', price: '7,00€'},
				{name: 'Sándwich vegtal triple \n  (Con atún o pollo, huevo a la plancha, queso, tomate, lechuga y salsa César)', price: '6,50€'},
				{name: 'Sándwich tradicional Dimonis \n  (Con pollo, bacon, queso, lechuga, tomate y salsa dimonis)', price: '6,50€'},
				{name: 'Sándwich mixto \n (Con york y queso)', price: '3,50€'}
			]



			export const entrantesItems = [
				{name: 'Croquetas de pollo', price: '5,00€'},
				{name: 'Calamares romana', price: '5,50€'},
				{name: 'Fingers de pollo', price: '6,00€'},
				{name: 'Nachos Mokitrokis \n (Con queso, carne picada, tomate y especiado)', price: '8,00€'},
				{name: 'Nachos con Mozzarella', price: '4,50€'},
				{name: 'Nachos 4 quesos', price: '6,00€'},
				{name: 'Bravas', price: '5,00€'},
				{name: 'Patatas \n (Con bacon, cebolla pochada y Mozzarella)', price: '6,00€'},
				{name: 'Patatas 4 quesos', price: '5,00€'},
				{name: 'Ración de patatas', price: '2,80€'},
				{name: 'Ración de patata Teja', price: '3,50€'},
				{name: 'Ración de boniat frito', price: '5,00€'},
			]


			export const hamburgPerritoItems = [
				{name: 'Perrito normal\n   (Con cebolla crujiente)', price: '3,50€'},
				{name: 'Perrito Lechero\n   (Con tortilla francesa)', price: '4,00€'},
				{name: 'Perrito tradicional Dimonis\n   (Con beicon y queso con cebolla crujiente y salsa tradicional Dimonis)', price: '4,50€'},
				{name: 'Perrito Mokitrokis\n   (Con queso, cebolla crujiente, pepinillo picado y salsa Mokitrokis)', price: '5,00€'},
				{name: 'Hamburguesa con queso', price: '4,50€'},
				{name: 'Hamburguesa con queso y beicon', price: '5,50€'},
				{name: 'Hamburguesa Mokitrokis\n   (Con beicon, huevo, cebolla pochada, queso chedar y salsa Mokitrokis)', price: '6,50€'},
				{name: 'Hamburguesa cabra\n   (Con pan brioche, queso de cabra, cebolla pochada y mermelada de arándanos)', price: '9,00€'},
				{name: 'Hamburguesa pollo rebozado\n   (Con pan brioche y queso cheddar)', price: '7,00€'},
				{name: 'Hamburguesa tradicional Dimonis\n   (Con queso, beicon, huevo, cebolla crujiente y salsa Dimonis)', price: '6,50€'}
			];

			export const hamburguesasEspecialesItems = [
				{name: 'La Rafaelo\n (Con pan brioche, doble carne de Smash, queso cheddar, cebolla pochada, beicon, huevo y salsa de mostaza y miel)', price: '9,50€'},
				{name: 'La Big-Burger\n (Con pan brioche, doble carne de Smash, queso cheddar, pepinillo picado, cebolla crujiente y salsa burger)', price: '9,50€'},
				{name: 'La Angus\n (Con pan brioche, 120 gramos de carne con queso cheddar, cebolla pochada y huevo)', price: '9,50€'}
			];

			export const paAmbOliItems = [
				{name: 'Mixto\n (Con serrano y queso)', price: '9,00€'},
				{name: 'Mallorquín\n (Con panceta, sobrasada y camaiot)', price: '12,00€'},
				{name: 'Cabrero con lomo y queso de cabra', price: '12,00€'},
				{name: 'Marinero con anchoas y atún', price: '11,00€'}
			];

			export const fajitaItems = [
				{name: 'Pollo rebozado o plancha con patatas\n (Con mozzarella, lechuga, tomate y salsa César)', price: '10,00€'},
				{name: 'Vegetal de atún\n (Con lechuga, tomate, huevo a la plancha y mayonesa)', price: '10,00€'}
			];


			export const ensaladaItems = [
				{name: 'César\n (Lechuga, tomate, queso, pollo rebozado, picatostes y salsa César)', price: '9,00€'},
				{name: 'Cabra\n (Lechuga, tomate, cebolla crujiente, queso de cabra y nueces)', price: '10,00€'},
				{name: 'Mixta\n (Lechuga, tomate, York, queso, atún y cebolla cruda)', price: '8,00€'}
			];


			export const veganoItems = [
				{name: 'Hamburguesa vegana\n   (Hamburguesa de berenjena, cebolla pochada y mermelada de arándanos)', price: '9,00€'},
				{name: 'Verduras en tempura', price: '5,00€'},
				{name: 'Fajita\n   (Berenjena, cebolla pochada, pimiento rojo y verde asado acompañado de patatas teja)', price: '10,00€'}
			];


			export const menusMokiItems = [
				{name: 'Hamburguesa a elegir entre Mokitrokis o Tradicional Dimonis con patatas teja y bebida de lata', price: '9.80€'},
				{name: 'Pepito a elegir entre Pepito Mokitrokis o Tradicional Dimonis con patatas teja y bebida de lata', price: '9,80€'},
				{name: 'Perrito (2 unidades) a elegir entre Perrito Mokitrokis o Tradicional Dimonis con patatas teja y bebida de lata', price: '9,80€'}
			];


			export const platoCombinadoItems = [
				{ name: 'Pechuga de pollo o lomo de cerdo a la plancha (Con ensalada, huevos y patatas)', price: '10,00€' },
				{ name: 'Pechuga de pollo (Con cubierta de bacon y mozzarella acompañado de patatas teja', price: '12,00€' },
				{ name: 'Pollo rebozado (Con ensalada y patatas)', price: '11,00€' }
			];


			export const pizzaItems = [
				{name: 'Margarita (Tomate y mozzarella)', price: '8,00€'},
				{name: 'Prosciuto (Tomate, York y mozzarella)', price: '8,50€'},
				{name: '4 Quesos (Mozzarella, edam, chedar y roquefort)', price: '9,00€'},
				{name: 'Romana (Mozzarella, champiñones, pimiento, bacon y pollo)', price: '9,50€'},
				{name: 'Vegetariana (Mozzarella, espinacas, cebolla y queso de cabra)', price: '10,00€'},
				{name: 'Cabra (Mozarella, sobrasada, queso de cabra y miel)', price: '11,00€'},
				{name: 'Barbacoa (Mozzarella, carne picada, bacon y salsa barbacoa)', price: '10,00€'},
				{name: 'Carbonara (Mozzarella, bacon, champiñones, cebolla y nata)', price: '10,00€'},
				{name: 'Tradicional Dimonis (Mozzarella, carne picada, pimiento y Salsa Dimonis)', price: '10,00€'},
				{name: 'Mokitrokis (Mozzarella, camaiot, lomo y roquefort)', price: '11,00€'}
			]



			export const dessertItems = [
				{ name: 'Postre 1', price: '8,50€' },
				{ name: 'Postre 2', price: '9,00€' },
				{ name: 'Postre 3', price: '9,50€' }
			];
