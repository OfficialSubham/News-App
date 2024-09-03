// import logo from './logo.svg';

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     country: "us"
  //   }

  // }
  
  api = process.env.REACT_APP_NEWS_API;

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
         
          <Navbar searchNews={this.searchNews} />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            // onLoaderFinished={() => {this.setProgress(0); console.log(this.state);}}
          />
          <Routes>
            <Route path="/" element={<News api={this.api}setProgress={this.setProgress} key="home" />} />
            <Route
              path="/home"
              element={<News api={this.api}setProgress={this.setProgress} key="general" category="general" />}
            />
            <Route
              path="/sports"
              element={<News api={this.api}setProgress={this.setProgress} key="sports" category="sports" />}
            />
            <Route
              path="/business"
              element={<News api={this.api}setProgress={this.setProgress} key="business" category="business" />}
            />
            <Route
              path="/science"
              element={<News api={this.api}setProgress={this.setProgress} key="science" category="science" />}
            />
            <Route
              path="/entertainment"
              element={<News api={this.api}setProgress={this.setProgress} key="entertainment" category="entertainment" />}
            />
            <Route
              path="/technology"
              element={<News api={this.api}setProgress={this.setProgress} key="technology" category="technology" />}
            />
            <Route path="/india" element={<News api={this.api}setProgress={this.setProgress} key="india" country="in" />} />
            <Route path="/us" element={<News api={this.api}setProgress={this.setProgress} key="us" country="us" />} />
            <Route
              path="/france"
              element={<News api={this.api}setProgress={this.setProgress} key="france" country="fr" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
