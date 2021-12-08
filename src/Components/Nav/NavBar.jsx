import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

import CartWidget from "./CartWidget.js";

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to={"/"} className="navUser">Studio Goldney</Link>
            <ul className="navContainer">
                <li><Link className="list" to={'/category/1'}>Procesadores</Link></li>
                <li><Link className="list" to={'/category/2'}>Motherboard</Link></li>
                <li><Link className="list" to={'/category/3'}>Periféricos</Link></li>
                <li><Link className="list" to={'/category/4'}>Fuentes de Alimentación</Link></li>
                <li><Link className="list" to={'/category/5'}>Gabinetes</Link></li>
            </ul>
            <CartWidget classCartWidget="CartWidget"/>
        </div>
    );
};

export default NavBar;
