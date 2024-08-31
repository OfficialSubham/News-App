import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      //   <div>
      //     This is a news component
      //     <NewsItem />
      //     <NewsItem />
      //     <NewsItem />
      //     <NewsItem />
      //     <NewsItem />
      //     <NewsItem />
      //   </div>

      <div className="container my-4">
        <div className="row g-2">
          <div className="col d-flex justify-content-evenly">
            <NewsItem title="example title" description="example description" />
          </div>
          <div className="col d-flex justify-content-evenly">
            <NewsItem />
          </div>
          <div className="col d-flex justify-content-evenly">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
