import React from "react";
import "../home/home.css";
import Comunidades from "../footer/footerComponents/Comunidades";
import Information from "../footer/footerComponents/Information";
import LinksUteis from "../footer/footerComponents/LinksUteis";
import Icons from "../footer/footerComponents/Icons";

import NavBar from "../home/homeComponents/NavBar";

const Template = ({ children }) => {
  return (
    <>
      <div className="navigation">
        <NavBar />
      </div>

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
