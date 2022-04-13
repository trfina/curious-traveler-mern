import React from "react";
import { Link } from "react-router-dom";
import ribbonLogo from "../../assets/ribbon.png";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="w-25" to="/">
          <h1>Curious Traveler</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <button className="btn m-2">
                <Link to="/profile">My Account</Link>
              </button>
              <button className="btn m-2">
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </button>
            </>
          ) : (
            <>
              <button className="btn m-2">
                <Link to="/login">Login</Link>
              </button>

              <button className="btn m-2">
                <Link to="/signup">Signup</Link>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
