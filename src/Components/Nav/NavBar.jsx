import React from "react";
import "./NavBar.scss";
import imagen from "../../assets/img/Logo.jpeg";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={imagen} alt="Logo"></img>
            <a href="/index.html" className="navUser">Inicio</a>
            <ul className="navContainer">
                <li><a href="#your_date" className="list">Agenda tu Cita</a></li>
                <li><a href="#services" className="list">Servicios</a></li>
                <li><a href="#Products" className="list">Productos</a></li>
                <li><a href="#AboutUs" className="list">Studio Goldney</a></li>
            </ul>
            <a href="#Login" className="navUser">Login</a>
        </div>
    );
};

export default NavBar;
