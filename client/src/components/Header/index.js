import React from "react";
import { Link } from "react-router-dom";
import ribbonLogo from "../../assets/ribbon.png";

const Header = () => {
  return (
    <header className="bg-primary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img className="logo " src={ribbonLogo} />
        </Link>

        <nav className="text-center">
          <button className="btn p-2 m-2">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn p-2 m-2">
            <Link to="/signup">Signup</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
