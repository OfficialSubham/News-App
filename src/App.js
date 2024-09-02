// import logo from './logo.svg';

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

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
        <Navbar/>
        <News />
      </>
    );
  }
}
