import React from "react";
import curiousCat from "../../assets/curious-cat.png";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-light align-center-xl flex flex-row justify-space-between">
        <p>&copy;2022 by Curious Travelers - Tammy, Cheri, Tyler, & Chuck</p>
        <img src={curiousCat} alt={""} width={50} height={90} />
      </div>
    </footer>
  );
};

export default Footer;
