import Head from "next/head";
import React from "react";
import istyle from "../Layouts/Default/indexStyle.module.css";
import Image from "next/image";
const Hero = () => {
  return (  
    <div className={istyle.herobg}>
      <div className={istyle.textContain}>
        <h3 className={istyle.indoor}>INDOORS</h3>
        <h1 className={istyle.mainText}>See Bamboo’s New Range Of Indoor Furniture</h1>
        <p className={istyle.parText}>Classic meet modern living,<br></br>Bamboo has a fantastic range of indoor furniture,<br></br>perfect for any modern home.</p>
        <a className={istyle.heroBtn} href="#">see more</a>
      </div>
    </div>
)};

export default Hero;
