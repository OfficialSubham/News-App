// import logo from './logo.svg';

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     country: "us"
  //   }

  // }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="home" />} />
            <Route
              path="/home"
              element={<News key="general" category="general" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              path="/business"
              element={<News key="business" category="business" />}
            />
            <Route
              path="/science"
              element={<News key="science" category="science" />}
            />
            <Route
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" />}
            />
            <Route
              path="/technology"
              element={<News key="technology" category="technology" />}
            />
             <Route
              path="/india"
              element={<News key="india" country="in"/>}
            />
             <Route
              path="/us"
              element={<News key="us" country="us" />}
            />
             <Route
              path="/france"
              element={<News key="france" country="fr" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
