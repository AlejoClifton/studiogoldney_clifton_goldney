import "./navbar.scss";
import { getCategories } from "../body/category/category.js";
import NavBarList from "./navBarList/NavBarList";

import { useEffect, useState } from "react";

const NavBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const list = getCategories();

        list.then((response) => {
            setCategory(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <NavBarList categories={category}/>
        </div>
    );
};

export default NavBar;
