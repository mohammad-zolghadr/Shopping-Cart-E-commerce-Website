import React from 'react';

// css
import style from './Footer.module.css';

// icons
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={style.fSection}>
          <h3>(+98) 916 453 8713</h3>
          <a href="mailto:mohammad.zol9978@gmail.com" target="_blank">
            support@gmail.com
          </a>
          <div className={style.socialWrapper}>
            <span>
              <a href="https://instagram.com/mozo.plus" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
            </span>
            <span>
              <a href="https://t.me/emzed1" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </span>
            <span>
              <a href="https://wa.me/+989164538713" target="_blank">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </span>
          </div>
        </div>
        <div className={style.fSection}>
          <span>Terms Of Use</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Our Community</a>
          <a href="#">Guidlines</a>
        </div>
        <div className={style.fSection}>
          <span>Account Manage</span>
          <a href="#">Login</a>
          <a href="#">Cart Shopping</a>
          <a href="#">Track My Order</a>
        </div>
        <div className={style.fSection}>
          <span>Do you have a problem?</span>
          <input type="text" placeholder="Tell Us ..." />
          <button>Send Message</button>
        </div>
      </div>
      <p className={style.fCopyright}>
        Copyrights &copy; 2022{' '}
        <a href="https://mohammadzolghadr.ir" target="_blank">
          Mozo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
