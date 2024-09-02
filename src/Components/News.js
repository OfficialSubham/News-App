import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  // articles = [
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: "BBC Sport",
  //     title: "England great Anderson considering white ball return",
  //     description:
  //       'James Anderson says he is "still fit enough" to continue his career as he considers a move into white ball cricket.',
  //     url: "https://www.bbc.com/sport/cricket/articles/cgrjnz8pgkvo",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_sport/27d8/live/96a5ec10-5940-11ef-94ec-63bde61d9499.jpg",
  //     publishedAt: "2024-08-13T06:53:31Z",
  //     content:
  //       "\"I might be in a bit of denial because I'm well aware I won't play for England again, but I've still not made a decision on my actual cricket career,\" Anderson told the Press Association.\r\n\"There's d… [+682 chars]",
  //   },
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: null,
  //     title: "Brave beat Phoenix in 'thrilling' Super Five after tie",
  //     description:
  //       "Watch the final stages of Southern Brave's victory over Birmingham Phoenix after a remarkable Eliminator was decided by the first Super Five in the tournament's history.",
  //     url: "https://www.bbc.com/sport/cricket/videos/c1d7eeqxxv4o",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/1e6d/live/259f7630-5cdd-11ef-b970-9f202720b57a.jpg",
  //     publishedAt: "2024-08-17T20:38:04Z",
  //     content:
  //       "Watch the final stages of Southern Brave's victory over Birmingham Phoenix after a remarkable Eliminator was decided by the first Super Five in the tournament's history.\r\nWATCH MORE: Cricket Video\r\nA… [+25 chars]",
  //   },
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: "Stephan Shemilt at Emirates Old Trafford",
  //     title: "Smith will be 'world-class for long period' - Bell",
  //     description:
  //       "Jamie Smith will be a “world-class player over a long period of time”, according to former England international and Sri Lanka batting coach Ian Bell.",
  //     url: "https://www.bbc.com/sport/cricket/articles/c5ylezy71p1o",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_sport/cff0/live/d292dec0-6185-11ef-b970-9f202720b57a.jpg",
  //     publishedAt: "2024-08-23T19:30:38Z",
  //     content:
  //       "Jamie Smith will be a world-class player over a long period of time, according to former England international and Sri Lanka batting coach Ian Bell.\r\nSmith, 24, made his maiden Test century on the th… [+1313 chars]",
  //   },
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: "Stephan Shemilt",
  //     title: "Captain Pope looking to 'reward' England with runs",
  //     description:
  //       'Stand-in captain Ollie Pope wants to "reward" his England side by scoring runs in the second Test against Sri Lanka at Lord\'s.',
  //     url: "https://www.bbc.com/sport/cricket/articles/cpqjy4erx0ro",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_sport/aaaf/live/fd58cc40-6532-11ef-8881-3361d84cbca1.jpg",
  //     publishedAt: "2024-08-28T13:33:22Z",
  //     content:
  //       "And Pope, who averages 34.64 from his 47 Tests, has sought the advice of Joe Root on combining the twin roles of captaincy and batting.\r\nRoot, 33, led England in a record 64 Tests before he was repla… [+1055 chars]",
  //   },
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: "Stephan Shemilt",
  //     title: "England closing in on victory over Sri Lanka",
  //     description:
  //       "England are closing in on victory over Sri Lanka after three days of the first Test at Emirates Old Trafford.",
  //     url: "https://www.bbc.com/sport/cricket/articles/ckg2yevnjg2o",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_sport/59f6/live/ae2f49d0-6174-11ef-b970-9f202720b57a.jpg",
  //     publishedAt: "2024-08-23T18:10:53Z",
  //     content:
  //       "For two days, some occasionally high-quality cricket had been hard to enjoy because of the drab conditions. A sunny Friday with a bigger crowd felt like the arrival of a spectacle.\r\nWith that in mind… [+1177 chars]",
  //   },
  //   {
  //     source: { id: null, name: "BBC News" },
  //     author: null,
  //     title: "Imran Khan applies to be uni chancellor from jail",
  //     description:
  //       "The former Prime Minister of Pakistan, who is in currently prison, plans to apply for the role.",
  //     url: "https://www.bbc.com/news/articles/c33n5dx20nno",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/2f0a/live/91eaf480-5e00-11ef-aa88-e1e8b52e1b59.jpg",
  //     publishedAt: "2024-08-19T10:41:15Z",
  //     content:
  //       "Mr Khan studied philosophy, politics and economics at Oxfords Keble College\r\nImran Khan, Pakistans jailed former prime minister, appears to be eyeing up a new role from behind bars that of Oxford Uni… [+1815 chars]",
  //   },
  //   {
  //     source: { id: null, name: "Android Police" },
  //     author: "Nida Zafar",
  //     title: "Cricket:How to port in you telephone number",
  //     description:
  //       "Cricket is one of the largest MVNOs in the US. If you’re making the jump to Cricket, here’s how to port in your telephone number.",
  //     url: "https://www.androidpolice.com/how-to-transfer-a-number-to-cricket/",
  //     urlToImage:
  //       "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/03/cricket-store-2-2.jpg",
  //     publishedAt: "2024-08-16T08:01:12Z",
  //     content:
  //       "Are you thinking of changing phone providers? Perhaps the cost is increasing, the service is inconsistent, or customer support is no help. Having a reliable cellular service you're happy with shouldn… [+5514 chars]",
  //   },
  // ];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    // this.state.articles.forEach((article) => {
    //   console.log(article);
    // });
  }

  async componentDidMount(paraPage = 1) {
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=01e4baf027f24d3cb8eb06ad2ec9dc56&page=${paraPage}&pageSize=${this.props.pageSize}`;
    let newsData = await fetch(url);
    let jsonNews = await newsData.json();
    // console.log(jsonNews);
    this.setState({ articles: jsonNews.articles, totalPages:  jsonNews.totalResults, loading: false});
  }

  handleNextClick = () => {
    let page = this.state.page + 1
    if(page > Math.ceil(this.state.totalPages / this.props.pageSize)){
      // document.querySelector(".js-next-button").setAttribute("disabled", "true")
      // console.log(page);
    }
    else {
      this.setState({page: page});
      // console.log(page);
      this.componentDidMount(page);
      // console.log();
    }
   
  };
  handlePreviousClick = () => {
    let page = this.state.page - 1
    this.setState({page: page});
    // console.log(this.state.page);
    this.componentDidMount(page);
    // document.querySelector(".js-next-button").removeAttribute("disabled")
    
  };

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
          <div className="container my-4">
            <div className="row g-4">
              {this.state.loading && <Loading />}
              {!this.state.loading &&this.state.articles.map((newsObject) => {
                return (
                  newsObject.urlToImage && (
                    <div
                      className="col d-flex justify-content-evenly"
                      key={newsObject.url}
                    >
                      <NewsItem
                        title={!newsObject.title ? "" : newsObject.title}
                        description={
                          !newsObject.description ? "" : newsObject.description
                        }
                        imageUrl={newsObject.urlToImage}
                        newsUrl={newsObject.url}
                      />
                    </div>
                  )
                );
              })}
            </div>
            <div className="container d-flex justify-content-between my-4">
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
                disabled={this.state.page + 1 > Math.ceil(this.state.totalPages / this.props.pageSize)? true : false}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
