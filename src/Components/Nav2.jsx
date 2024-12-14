import React, { useState, useEffect } from "react";
import "../Styles/nav2.css";

export default function Nav2() {
	const [navItems, setNavItems] = useState([
		"Inicio",
		"Talleres y Seminarios",
		"Asociaciones y Centros",
		"Quien soy",
		"Contactame",
	]);
	const [visibleItemsCount, setVisibleItemsCount] = useState(navItems.length);

	// Función para ajustar el número de elementos visibles según el ancho de la pantalla
	const adjustVisibleItems = () => {
		const screenWidth = window.innerWidth;

		// Ejemplo: Menos elementos visibles en pantallas más pequeñas
		if (screenWidth < 600) {
			setVisibleItemsCount(1);
		} else if (screenWidth < 800) {
			setVisibleItemsCount(2);
		} else if (screenWidth < 1000) {
			setVisibleItemsCount(3);
		} else {
			setVisibleItemsCount(navItems.length);
		}
	};

	useEffect(() => {
		// Llamar la función al montar el componente
		adjustVisibleItems();

		// Agregar el event listener para detectar cambios de tamaño
		window.addEventListener("resize", adjustVisibleItems);

		// Limpiar el event listener al desmontar
		return () => {
			window.removeEventListener("resize", adjustVisibleItems);
		};
	}, []);

	return (
		<>
			<div id="nav-horizontal">
				<div className="brillo"></div>
				<button className="menu-boton">&#9776;</button>
				<div className="items">
					{navItems.slice(0, visibleItemsCount).map((item, index) => (
						<a key={index} href="#">
							{item}
						</a>
					))}
				</div>
				<div id="contenedor-vertical">
					<div className="items-sidebar">
						{navItems.map((item, index) => (
							<a key={index} href="#">{item}</a>
						))}
					</div>
				</div>
			</div>
			
		</>
	);
}
