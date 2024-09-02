import React, { Component } from "react";
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {};

  render() {

    // let changeCountry = (e) => {
    //   let countryCode = String(e.target.dataset.countryCode);
    //   console.log(countryCode);
    //   console.log(this.props.state);
    //   this.props.setState({country: countryCode});
    // }
    
    return (
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NEWS | OfficialSubham
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Technology
                </a>
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
                  <li className="mx-2" data-country-code="in">
                    India
                  </li>
                  <li className="mx-2" data-country-code="us">
                    UnitedStates
                  </li>
                  <li className="mx-2" data-country-code="fr">
                    France
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
