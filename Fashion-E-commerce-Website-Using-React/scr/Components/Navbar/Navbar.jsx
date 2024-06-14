import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css';
import logo from '../Assets/My-logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { ShopContext } from '../ShopCategory/ShopContext';
import userIcon from '../Assets/userIcon.png';
import searchIcon from '../Assets/searchIcon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                <Link to="/" onClick={() => setMenu("shop")}>
                    <img src={logo} alt="the logo" />
                </Link>
            </div>
            <ul className={styles.navMenu}>
                <li onClick={() => setMenu("shop")}>
                    <Link to='/' className={menu === "shop" ? styles.active : ''}>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li className={styles.dropdown} onClick={() => setMenu("mens")}>
                    <Link to='/mens' className={menu === "mens" ? styles.active : ''}>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li className={styles.dropdown} onClick={() => setMenu("womens")}>
                    <Link to='/womens' className={menu === "womens" ? styles.active : ''}>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li className={styles.dropdown} onClick={() => setMenu("kids")}>
                    <Link to='/kids' className={menu === "kids" ? styles.active : ''}>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search for items" name="search" className={styles.search}/>
                <button type="submit" className={styles.searchButton}>
                    <img src={searchIcon} alt="Search" />
                </button>
            </div>
            <div className={styles.navLoginCart}>
                <Link to='/login'><img src={userIcon} alt="" /></Link>
                <Link to='/cart'><img src={cartIcon} alt="the cart icon" /></Link>
                <div className={styles.navCartCount}>{getTotalCartItems()}</div>
            </div>
        </nav>
    );
}

export default Navbar;
