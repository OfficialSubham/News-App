import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  firstLetterCapital(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalPages: 0,
    };
    // this.state.articles.forEach((article) => {
    //   console.log(article);
    // });
    document.title = `${this.firstLetterCapital(this.props.category)} - NEWS`;
  }

  async loadNews(page = 1) {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=d379076a66e4496eba44a1d3f0522c4a&page=${page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(40)
    let newsData = await fetch(url);
    this.props.setProgress(50)
    let jsonNews = await newsData.json();
    this.props.setProgress(80)

    // console.log(jsonNews);
    this.setState({
      // page: page,
      articles: jsonNews.articles,
      totalPages: jsonNews.totalResults,
      loading: false,
    });
    this.props.setProgress(100)

  }

  fetchMoreData = async () => {
    let page = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=d379076a66e4496eba44a1d3f0522c4a&page=${page}&pageSize=${this.props.pageSize}`;

    let newsData = await fetch(url);
    let jsonNews = await newsData.json();
    // console.log(jsonNews);
    this.setState({
      // page: page,
      articles: this.state.articles.concat(jsonNews.articles),
      totalPages: jsonNews.totalResults,
      // loading: false,
    });
    this.setState({ page: page });
    // this.setState({ loading: true });

    // else {
    //   this.setState({loading: false})
    //   // console.log(document.querySelector(".js-infinite-scroll").lastChild.removeChild());
    // }

    // console.log(this.state.articles.length);
  };

  // async searchFunction(search="apple") {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?q=health&country=${this.props.country}&apiKey=d379076a66e4496eba44a1d3f0522c4a&page=1&pageSize=${this.props.pageSize}`;
  //   let newsData = await fetch(url);
  //   let jsonNews = await newsData.json();
  //   console.log(jsonNews);
  //   this.setState({
  //     articles: jsonNews.articles,
  //     totalPages: jsonNews.totalResults,
  //     loading: false,
  //   });
  // }

  async componentDidMount() {
    this.setState({ loading: true });
    this.loadNews();
    // this.setState({loading: false})

    // console.log(this.state.articles.length);
  }

  // handleNextClick = () => {
  //   let page = this.state.page + 1;
  //   if (!(page > Math.ceil(this.state.totalPages / this.props.pageSize))) {
  //     // document.querySelector(".js-next-button").setAttribute("disabled", "true")
  //     // console.log(page);
  //     this.setState({ page: page });
  //     // console.log(page);
  //     this.componentDidMount(page);
  //     // console.log();
  //   }
  // };
  // handlePreviousClick = () => {
  //   let page = this.state.page - 1;
  //   this.setState({ page: page });
  //   // console.log(this.state.page);
  //   this.componentDidMount(page);
  //   // document.querySelector(".js-next-button").removeAttribute("disabled")
  // };

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
      <>
        <div className="container">
          <h1 className="my-3 text-center">Breaking News</h1>
          <h3 className="my-3 text-center">{this.firstLetterCapital(this.props.category === "general" ? "Home": this.props.category)}</h3>
          <div className="container my-4">
            {/* <div className="container d-flex justify-content-between my-4">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handlePreviousClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark js-next-button"
                onClick={this.handleNextClick}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalPages / this.props.pageSize)
                    ? true
                    : false
                }
              >
                Next &rarr;
              </button>
            </div> */}

            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalPages}
              loader={<Loading />}
              // className="js-infinite-scroll"
            >
              <div className="container">
                <div className="row g-4">
                  {this.state.loading && <Loading />}
                  {this.state.articles.map((newsObject) => {
                    return (
                      <div
                        className="col d-flex justify-content-evenly"
                        key={newsObject.url}
                      >
                        <NewsItem
                          title={!newsObject.title ? "" : newsObject.title}
                          description={
                            !newsObject.description
                              ? ""
                              : newsObject.description
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
  }
}

export default News;
