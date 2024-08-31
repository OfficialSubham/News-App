import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div class="card" style={{width: "18rem"}}>
          <img
            src="https://ichef.bbci.co.uk/news/1024/branded_sport/27d8/live/96a5ec10-5940-11ef-94ec-63bde61d9499.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
                {description}
            </p>
            
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
