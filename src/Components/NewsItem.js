import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
           
          </div>
          <a href={newsUrl} target="_blank" className="btn btn-primary" style={{margin: "0 30px 10px 30px"}}>
              Read more
            </a>
        </div>
      </>
    );
  }
}

export default NewsItem;
