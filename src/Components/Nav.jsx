import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../Styles/nav.css";

export default function Nav() {
  const [navItems, setNavItems] = useState([
    { text: "Inicio", href: "/" },
    { text: "Talleres y Seminarios", href: "#talleres" },
    { text: "Asociaciones y Centros", href: "#asociaciones" },
    { text: "Quién soy", href: "#quien-soy" },
    { text: "Contactame", href: "#contactame" },
  ]);
  const [masMenuItems, setmasMenuItems] = useState([
    { text: "Inicio", href: "/" },
    { text: "Talleres y Seminarios", href: "#talleres" },
    { text: "Asociaciones y Centros", href: "#asociaciones" },
    { text: "Quién soy", href: "#quien-soy" },
    { text: "Contactame", href: "#contactame" },
  ]);

  const [visibleItemsCount, setVisibleItemsCount] = useState(navItems.length);
  const [visibleMasMenuItemsCount, setVisibleMasMenuItemsCount] = useState(masMenuItems.length);

  const adjustVisibleItemsAndMenu = () => {
    const screenWidth = window.innerWidth;

    // Ajustar la cantidad de elementos visibles
    if (screenWidth < 680) {
      setVisibleItemsCount(1);
      setVisibleMasMenuItemsCount(4);
    } else if (screenWidth < 870) {
      setVisibleItemsCount(2);
      setVisibleMasMenuItemsCount(3);
    } else if (screenWidth < 982) {
      setVisibleItemsCount(3);
      setVisibleMasMenuItemsCount(2);
    } else if (screenWidth < 1107) {
      setVisibleItemsCount(4);
      setVisibleMasMenuItemsCount(1);
    } else {
      setVisibleItemsCount(navItems.length);
      setVisibleMasMenuItemsCount(0);
    }
  };

  useEffect(() => {
    adjustVisibleItemsAndMenu();
    window.addEventListener("resize", adjustVisibleItemsAndMenu);

    return () => {
      window.removeEventListener("resize", adjustVisibleItemsAndMenu);
    };
  }, []);

  return (
    <>
      <nav id="nav-horizontal">
        <div className="logo-titulo">
          <img className="img" src={logo} alt="logo" title="Ser en tu existencia"/>
          <a href="#" className="title">Ser en tu existencia</a>
        </div>

        <div className="items">
            {navItems.slice(0, visibleItemsCount).map((item, index) => (
                <a key={index} href={item.href}>{item.text}</a>
            ))}
        </div>

        <div className="mas-boton-cont">
          <a className="mas-boton">Más ▾</a>
        </div>

        <div className="masMenu">
            <div className="mas-items">
                {visibleMasMenuItemsCount > 0 && masMenuItems.slice(-visibleMasMenuItemsCount).reverse().map((item, index) => (
                    <a key={index} href={item.href}>{item.text}</a>
                ))}
            </div>
        </div>

        <button className="menu-boton">☰</button>

        <div id="contenedor-vertical">
            <div className="items-sidebar">
                {navItems.map((item, index) => (
                    <a key={index} href={item.href}>{item.text}</a>
                ))}
            </div>
        </div>
      </nav>
    </>
  );
}
