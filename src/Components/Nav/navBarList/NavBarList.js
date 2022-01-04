import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import NavBarCategory from './cartWidget/NavBarCategory';
import CartWidget from './cartWidget/CartWidget';

const NavBarList = ({ categories }) => {
    const [state, setState] = useState(false);
    const [clase, setClase] = useState('navContainer')
    const menuButton = () => {
        if (!state) {
            setClase('navContainer displayNav');
            setState(true);
        }
        else {
            setClase('navContainer');
            setState(false);
        }
    };
    return (
        <div className="navBar">
            <Link to={'/'} className="navUser">
                Studio Goldney
            </Link>
            <ul className={clase}>
                {categories.map((category) => (
                    <NavBarCategory key={category.id} category={category} />
                ))}
            </ul>
            <CartWidget />
            <i onClick={menuButton} className="fas fa-bars buttonMenu"></i>
        </div>
    );
};

export default NavBarList;
