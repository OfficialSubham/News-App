// import logo from './logo.svg';

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const api = process.env.REACT_APP_NEWS_API;
  // api = "01e4baf027f24d3cb8eb06ad2ec9dc56"
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          // onLoaderFinished={() => {setProgress(0); console.log(this.state);}}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/home"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="general"
                category="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="sports"
                category="sports"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="business"
                category="business"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="science"
                category="science"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="technology"
                category="technology"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/india"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="india"
                country="in"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/us"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="us"
                country="us"
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/france"
            element={
              <News
                api={api}
                setProgress={setProgress}
                key="france"
                country="fr"
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;