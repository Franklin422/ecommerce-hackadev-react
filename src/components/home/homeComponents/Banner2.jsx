import React from "react";
import ImgBanner2 from "../../../assets/img/banner.png"

const Banner2 = () => {
  return (
    <>
    <div className="left">
      <span className="trend">Liquidação </span>
      <h1>Coleção 2022</h1>
      <p>
        peças com até <span className="color">50% de desconto</span> 
      </p>
      <a href="/" className="btn btn-1">APROVEITAR</a>
    </div>
    <div className="right">
      <img src={ImgBanner2} alt="banner 2" />
    </div>
    </>
  );
};

export default Banner2;
