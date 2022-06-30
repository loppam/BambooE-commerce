import React from "react";
import Logo from "./Logo";
import style from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../../containers/Button";


const Navbar = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.navWrapper}>
        <button className={style.navButton}>
          <GiHamburgerMenu />
        </button>
        <Logo />
        <div className={style.navActions}>
          <Button>
            <FiSearch className={style.navActionItem} />
          </Button>
          <Button>
            <AiOutlineShoppingCart className={style.navActionItem} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
