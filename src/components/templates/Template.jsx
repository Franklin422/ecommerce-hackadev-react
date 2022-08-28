import React from "react";
import "../home/style.css";
import Comunidades from "../footerComponents/Comunidades";
import Information from "../footerComponents/Information";
import LinksUteis from "../footerComponents/LinksUteis";
import Banner from "../home/homeComponents/Banner";
import Icons from "../footerComponents/Icons";

import NavBar from "../home/homeComponents/NavBar";

const Template = ({ children }) => {
  return (
    <>
      <header className="header" id="header">
        <NavBar />
        <Banner />
      </header>

      {children}

      <footer className="footer">
        <div className="row">
          <Information />
          <LinksUteis />
          <Comunidades />
          <Icons />
        </div>
      </footer>
    </>
  );
};

export default Template;
