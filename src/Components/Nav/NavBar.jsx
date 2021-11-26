import React from "react";
import "./navbar.scss";
// import imagen from "../../assets/img/logo.jpeg";
import CartWidget from "./CartWidget.js";

const NavBar = () => {
    return (
        <div className="navBar">
            <a href="/index.html" className="navUser">Inicio</a>
            <ul className="navContainer">
                <li><a href="#your_date" className="list">Agenda tu Cita</a></li>
                <li><a href="#services" className="list">Servicios</a></li>
                <li><a href="#Products" className="list">Productos</a></li>
                <li><a href="#AboutUs" className="list">Studio Goldney</a></li>
            </ul>
            <a href="#Login" className="navUser">Login</a>
            <CartWidget classCartWidget="CartWidget"/>
        </div>
    );
};

export default NavBar;
