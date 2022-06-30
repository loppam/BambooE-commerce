import React from "react";
import Hero from "../src/components/hero";
import Featured from "../src/components/featured";
import Featuredd from "../src/components/featuredd";
import style from "../src/layouts/Default/style.module.css";
const Home = () => {
  return(
    <React.Fragment>
      <Hero />
      <Featured />
      <Featuredd />
    </React.Fragment>
)};

export default Home;
