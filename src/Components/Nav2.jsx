import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../Styles/nav2.css";

export default function Nav2() {
	const [navItems, setNavItems] = useState([
		"Inicio",
		"Talleres y Seminarios",
		"Asociaciones y Centros",
		"Quién soy",
		"Contactame",
	]);
	const [masMenuItems, setmasMenuItems] = useState([
		"Inicio",
		"Talleres y Seminarios",
		"Asociaciones y Centros",
		"Quién soy",
		"Contactame",
	]);
	const [visibleItemsCount, setVisibleItemsCount] = useState(navItems.length);
	const [visibleMasMenuItemsCount, setVisibleMasMenuItemsCount] = useState(masMenuItems.length);

	// Función para ajustar el número de elementos visibles según el ancho de la pantalla
	const adjustVisibleItems = () => {
		const screenWidth = window.innerWidth;

		// Ejemplo: Menos elementos visibles en pantallas más pequeñas
		if (screenWidth < 680) {
			setVisibleItemsCount(1);
		} else if (screenWidth < 870) {
			setVisibleItemsCount(2);
		} else if (screenWidth < 982) {
			setVisibleItemsCount(3);
		} else if (screenWidth < 1107) {
			setVisibleItemsCount(4);
		} else {
			setVisibleItemsCount(navItems.length);
		}
	};
	const adjustVisibleMasMenuItems = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth < 680) {
			setVisibleMasMenuItemsCount(4);
		} else if (screenWidth < 870) {
			setVisibleMasMenuItemsCount(3);
		} else if (screenWidth < 982) {
			setVisibleMasMenuItemsCount(2);
		} else if (screenWidth < 1107) {
			setVisibleMasMenuItemsCount(1);
		} else {
			setVisibleMasMenuItemsCount(0);
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
				<div className="logo-titulo">
					<img className="img" src={logo} alt="logo" title="Ser en tu existencia" />
					<a href="#" className="title">Ser en tu existencia</a>
				</div>

				<div className="items">
					{navItems.slice(0, visibleItemsCount).map((item, index) => (
						<a key={index} href="#">{item}</a>
					))}
				</div>

				<div className="mas-boton-cont">
					<a className="mas-boton">Más ▾</a>
				</div>
				
				<div className="masMenu">
					<div className="mas-items">
						{visibleMasMenuItemsCount > 0 && (
							masMenuItems
								.slice(-visibleMasMenuItemsCount)
								.reverse()
								.map((item, index) => (
									<a key={index} href="#">{item}</a>
								))
							)
						}
					</div>
				</div>

				<button className="menu-boton">☰</button>

				<div id="contenedor-vertical">
					<div className="items-sidebar">
						{navItems.map((item, index) => (
							<a key={index} href="#">{item}</a>
						))}
					</div>
				</div>
			</nav>
		</>
	);
}
