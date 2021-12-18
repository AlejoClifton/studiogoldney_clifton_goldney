import { Link } from "react-router-dom";
import React from "react";

import NavBarCategory from "./cartWidget/NavBarCategory";
import CartWidget from "./cartWidget/CartWidget";

const NavBarList = ({ categories }) => {
    return (
        <div className="navBar">
            <Link to={"/"} className="navUser">Studio Goldney</Link>
            <ul className="navContainer">
                {categories.map(category => <NavBarCategory key={category.id} category={category} />)}
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBarList
