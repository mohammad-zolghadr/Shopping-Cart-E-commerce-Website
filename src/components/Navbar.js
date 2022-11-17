import React from 'react';

// SPA
import { Link } from 'react-router-dom';

// css
import style from './Navbar.module.css';

// icons
import cartIcon from '../images/cart.svg';
import paymentIcon from '../images/payment.svg';
import homeIcon from '../images/home.svg';
import logo from '../images/logo.png';

// redux
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.cState);

  return (
    <nav>
      <img className={style.logo} src={logo} />
      <ul>
        <li>
          <Link to="/">
            <img className={style.icHome} src={homeIcon} alt="home" />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={cartIcon} alt="product" />
          </Link>
        </li>
        <li>
          <Link className={style.cartWrapper} to="/cart">
            <img src={paymentIcon} alt="cart" />
            {state.itemsCounter > 0 && <span className={style.icAnim}></span>}
            <span>{state.itemsCounter}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
