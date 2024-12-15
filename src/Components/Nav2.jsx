import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../Styles/nav2.css";

export default function Nav2() {
	const [navItems, setNavItems] = useState([
		"Inicio",
		"Talleres y Seminarios",
		"Asociaciones y Centros",
		"Quien soy",
		"Contactame",
	]);
	const [masMenuItems, setmasMenuItems] = useState([
		"Inicio",
		"Talleres y Seminarios",
		"Asociaciones y Centros",
		"Quien soy",
		"Contactame",
	]);
	const [visibleItemsCount, setVisibleItemsCount] = useState(navItems.length);
	const [visibleMasMenuItemsCount, setVisibleMasMenuItemsCount] = useState(masMenuItems.length);

	// Función para ajustar el número de elementos visibles según el ancho de la pantalla
	const adjustVisibleItems = () => {
		const screenWidth = window.innerWidth;

		// Ejemplo: Menos elementos visibles en pantallas más pequeñas
		if (screenWidth < 500) {
			setVisibleItemsCount(1);
		} else if (screenWidth < 700) {
			setVisibleItemsCount(2);
		} else if (screenWidth < 800) {
			setVisibleItemsCount(3);
		} else if (screenWidth < 1000) {
			setVisibleItemsCount(4);
		} else {
			setVisibleItemsCount(navItems.length);
		}
	};
	const adjustVisibleMasMenuItems = () => {
		const screenWidth = window.innerWidth;

		// Ejemplo: Menos elementos visibles en pantallas más pequeñas
		if (screenWidth < 600) {
			setVisibleMasMenuItemsCount(1);
		} else if (screenWidth < 800) {
			setVisibleMasMenuItemsCount(2);
		} else if (screenWidth < 1000) {
			setVisibleMasMenuItemsCount(3);
		} else {
			setVisibleMasMenuItemsCount(navItems.length);
		}
	};

	useEffect(() => {
		// Llamar la función al montar el componente
		adjustVisibleItems();
		adjustVisibleMasMenuItems();

		// Agregar el event listener para detectar cambios de tamaño
		window.addEventListener("resize", adjustVisibleItems);
		window.addEventListener("resize", adjustVisibleMasMenuItems);

		// Limpiar el event listener al desmontar
		return () => {
			window.removeEventListener("resize", adjustVisibleItems);
			window.removeEventListener("resize", adjustVisibleMasMenuItems);
		};
	}, []);

	return (
		<>
			<nav id="nav-horizontal">
				<img src={logo} alt="logo" title="Ser en tu existencia" />
				<a className="title">Ser en tu existencia</a>

				<div className="items">
					{navItems.slice(0, visibleItemsCount).map((item, index) => (
						<a key={index} href="#">
							{item}
						</a>
					))}
					<div className="masMenu" style={{ display: "none" }}>
						Más
						<div className="mas-items" style={{ display: "none" }}>
							{masMenuItems
								.slice(0, visibleMasMenuItemsCount)
								.map((item, index) => (
									<a key={index} href="#">
										{item}
									</a>
								))}
						</div>
					</div>
				</div>

				<button className="menu-boton">&#9776;</button>
				<div id="contenedor-vertical">
					<div className="items-sidebar">
						{navItems.map((item, index) => (
							<a key={index} href="#">
								{item}
							</a>
						))}
					</div>
				</div>
			</nav>
		</>
	);
}
