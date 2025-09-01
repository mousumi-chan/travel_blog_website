import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { UserContext } from "../userContext";

import "./NavbarStyles.css";

class Navbar extends Component {
  static contextType = UserContext;

  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { user } = this.context;

    return (
      <nav className="NavbarItems">
        {/* Logo */}
        <h1 className="navbar-logo">Trippy</h1>

        {/* Hamburger for mobile */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        {/* Navigation menu - filtered to exclude Sign Up */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.filter((item) => item.title !== "Sign Up").map(
            (item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i> {item.title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>

        {/* Right-side buttons container */}
        <div className="right-actions">
          {/* Sign Up or user initial */}
          <div className="signup-button-container">
            {user.isLoggedIn ? (
              <div className="user-initial" title={user.name}>
                {user.initial}
              </div>
            ) : (
              <Link to="/signup">
                <button className="signup-button">Sign Up</button>
              </Link>
            )}
          </div>

          {/* Plus button navigates to /create-blog */}
          <Link to="/create-blog" className="animated-plus">
            <span className="plus-line horizontal"></span>
            <span className="plus-line vertical"></span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
