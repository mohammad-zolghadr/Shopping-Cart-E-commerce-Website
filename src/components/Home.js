import React, { useEffect, useState } from 'react';

// css
import style from './Home.module.css';

// image
import headImage from '../images/shop.jpg';
import productImage from '../images/cart.svg';
import paymentImage from '../images/payment.svg';
import homeImage from '../images/home.svg';

// SPA
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Online Shop | Home';
  }, []);

  const [textValue, setTextValue] = useState('');

  return (
    <main>
      <section className={style.hHeadWrapper}>
        <span className={style.hHLowOpacityCover}>
          <span></span>
        </span>
        <div>
          <h2>Wellcome to Shop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            This online shop is made by <strong>Mohammad Zolghadr</strong> and use
            Html&Css , React.js , React-Router-DOM , Redux , Functional Components. If you
            want to see more, click on link in blow
          </p>
          <div className={style.hHBtns}>
            <a href="https://mohammadzolghadr.ir" target="_blank">
              Contact Me
            </a>
            <a
              href="https://mohammadzolghadr.ir/files/Mohammad%20Zolghadr.pdf"
              download="Mohammad Zolghadr Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
        <img src={headImage} alt="online shop" />
      </section>

      <section className={style.hServices}>
        <h2>Our Services</h2>
        <div className={style.hsSectionWrapper}>
          <div className={style.hsSection}>
            <img src={productImage} alt="products" />
            <div>
              <Link to="/products">New Products</Link>
              <p>new products with 30% off</p>
            </div>
          </div>

          <div className={style.hsSection}>
            <img src={paymentImage} alt="products" />
            <div>
              <Link to="/cart">New Payment Methode</Link>
              <p>checkout with 3 ways</p>
            </div>
          </div>

          <div className={style.hsSection}>
            <img src={homeImage} alt="products" />
            <div>
              <Link to="/">Best Design Web</Link>
              <p>design for better experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.hContact}>
        <h2>Contact Us</h2>
        <textarea
          onChange={(e) => setTextValue(e.target.value)}
          value={textValue}
          placeholder="Type Something..."
        ></textarea>
        <button>Send Message</button>
      </section>
    </main>
  );
};

export default Home;
