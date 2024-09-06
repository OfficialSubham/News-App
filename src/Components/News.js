import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const firstLetterCapital = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  

  const loadNews = async () => {
    props.setProgress(0);
    document.title = `${firstLetterCapital(props.category === "general" ? "home" : props.category )} - NEWS`;
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${!props.country ? "us" : props.country}&apiKey=${props.api}&page=${page}&pageSize=${!props.pageSize ? 5 : props.pageSize}`;
    props.setProgress(40);
    let newsData = await fetch(url);
    props.setProgress(50);
    let jsonNews = await newsData.json();
    props.setProgress(80);
    setArticles(jsonNews.articles);
    setTotalPages(jsonNews.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    let nowPage = page + 1
    let url = `https://newsapi.org/v2/top-headlines?category=${!props.category ? "general" : props.category}&country=${!props.country ? "us" : props.country}&apiKey=${props.api}&page=${nowPage}&pageSize=${!props.pageSize ? 5 : props.pageSize}`;

    let newsData = await fetch(url);
    let jsonNews = await newsData.json();
    setArticles(articles.concat(jsonNews.articles));
    setTotalPages(jsonNews.totalResults);
    setPage(nowPage)
  };

  useEffect(() => {
    setLoading(true);
    loadNews();
  }, []);

  return (

    <>
      <div className="container">
        <h1 className="my-3 text-center">Breaking News</h1>
        <h3 className="my-3 text-center">
          {firstLetterCapital(
            props.category === "general" ? "Home" : props.category
          )}
        </h3>
        <div className="container my-4">

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalPages}
            loader={<Loading />}
          >
            <div className="container">
              <div className="row g-4">
                {loading && <Loading />}
                {articles.map((newsObject) => {
                  return (
                    <div
                      className="col d-flex justify-content-evenly"
                      key={newsObject.url}
                    >
                      <NewsItem
                        title={!newsObject.title ? "" : newsObject.title}
                        description={
                          !newsObject.description ? "" : newsObject.description
                        }
                        imageUrl={
                          !newsObject.urlToImage
                            ? "https://images.bild.de/66d2e4eae61b032a420a980d/9b655d74fbee7121f7698d4e1ddfb2d4,afd732c1?w=1280"
                            : newsObject.urlToImage
                        }
                        newsUrl={newsObject.url}
                        publishedAt={newsObject.publishedAt}
                        author={newsObject.author}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
