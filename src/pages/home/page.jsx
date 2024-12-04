import React from "react";
import Header from "../../assets/components/header/index";
import SignUp from "../../assets/components/signup/index";
import BuySupply from "../../assets/components/buy_supply/index";
import Verified from "../../assets/components/verified/index";
import HowItWorks from "../../assets/components/how_it_works/index";
function Home() {
  return (
    <>
      <Header />
      <SignUp />
      <BuySupply />
      <Verified />
      <HowItWorks />
    </>
  );
}

export default Home;
