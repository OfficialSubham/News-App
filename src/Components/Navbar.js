import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import News from "./News";

const Navbar = () => {
  // static propTypes = {};
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NEWS | OfficialSubham
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <div className="dropdown js-drop-menu">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
              </a>

              <ul
                className="dropdown-menu "
                style={{ cursor: "pointer" }}
                // onClick={changeCountry}
              >
                <Link className="mx-2" to="/india">
                  India
                </Link>
                <Link className="mx-2" to="/us">
                  UnitedStates
                </Link>
                <Link className="mx-2" to="/france">
                  France
                </Link>
              </ul>
            </div>
          </ul>
        </div>

        {/* <div className="d-flex">
            <input
              className="form-control me-2 js-form-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success js-search-button"
              type="submit"
              // onClick={News.searchNews}
            >
              Search
            </button>
          </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
