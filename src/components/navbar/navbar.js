import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar--item navbar__left">
            <p>Text on left</p>
          </div>
          <div className="navbar--item navbar__right">
            <p>Text on right</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
