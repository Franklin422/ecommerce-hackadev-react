import React, { useEffect, useState } from "react";
import "../home.css";
import BannerImg from "../../../assets/img/hero-1.png";

const Banner = () => {
  const [attributes, setAttributes] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setAttributes({ bottom: 0, opacity: 1, top: "200px" });
    }, 100);
  });
  return (
    <div className="banner1">
      <div style={{ top: attributes.top, opacity: attributes.opacity }}>
        <span>Tendências e Inspirações 2022</span>
        <h1> Nova Coleção</h1>
        <p>Tendências e Coleções Masculino e Feminino</p>
        <a href="/" className="hero-btn">
          Compre Agora
        </a>
      </div>
      <img
        src={BannerImg}
        style={{ bottom: attributes.bottom, opacity: attributes.opacity }}
        alt="imagem banner"
      />
    </div>
  );
};

export default Banner;
