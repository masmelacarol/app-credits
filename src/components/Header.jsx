import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

const Header = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <p className="navbar-brand m-0 mr-5">Creditos</p>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
      <span className="navbar-text">Monto</span>
    </div>
  </nav>
);

export default connect(null, null)(Header);
