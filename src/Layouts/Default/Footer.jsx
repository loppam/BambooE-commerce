import React from "react";
import style from "./style.module.css";
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import Footerlogo from "./Footerlogo";
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContainer__socialContainer}>
        <form className={style.footerContainer__socialContainerForm}>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Enter Your E-mail Address Here"
            className={style.footerContainer__socialContainerFormInput}
          />
          </form>
          <div className={style.footerContainer__socialIconContainerSocialIcon}>
            <div className={style.socialIcons}>
              <h3>JOIN US ON</h3>
              <button className={style.footerButton}>
                <FaFacebook className={style.footerSocialIconsfb} />
              </button>

              <button className={style.footerButton}>
                <AiFillTwitterCircle className={style.footerSocialIconstw} />
              </button>

              <button className={style.footerButton}>
                <FaInstagram className={style.footerSocialIconsig} />
              </button>
            </div>
          </div>
      </div>
            <div className={style.footerBottom}>
              <h3>TERMS & CODITION POLICY</h3>
              <Footerlogo />
              <h3>© 2019 Bamboo All Rights Reserved</h3>
            </div>
    </footer>
  );
};

export default Footer;
