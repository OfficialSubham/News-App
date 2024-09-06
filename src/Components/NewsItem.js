import React from "react";

const NewsItem = (props) => {
  // getDate(date) {
  //   date = date.split("T")
  //   return date[0]
  // }
  let { title, description, imageUrl, newsUrl, publishedAt, author } = props;
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">By {!author ? "Unknown" : author} </p>
          <p className="card-text">{new Date(publishedAt).toGMTString()}</p>
        </div>
        <a
          href={newsUrl}
          rel="noreferrer"
          target="_blank"
          className="btn btn-dark"
          style={{ margin: "0 30px 10px 30px" }}
        >
          Read more
        </a>
      </div>
    </>
  );
};

export default NewsItem;
