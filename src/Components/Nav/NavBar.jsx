import './navbar.scss';
import NavBarList from './navBarList/NavBarList';

import { useEffect, useState } from 'react';

import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../service/firebase/firebase';

const NavBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'category'))
            .then((QuerySnapshot) => {
                const products = QuerySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setCategory(products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <NavBarList categories={category} />
        </div>
    );
};

export default NavBar;
