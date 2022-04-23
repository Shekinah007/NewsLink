import React from "react";
import Header from "./Components/Header.js";
import NewsBody from "./Components/NewsBody.js";

export default function App() {
  // console.clear();
  let [q, setQ] = React.useState("cow");
  // React.useEffect(function () {
  //   const NewsAPI = require("nwsapi");
  //   const newsapi = new NewsAPI("bd662b9c617d48bca5aa4e291b6ea52f");
  //   // To query top headlines
  //   // All options passed to topHeadlines are optional,
  //   //but you need to include at least one of them
  //   newsapi.v2
  //     .topHeadlines({
  //       q: "trump",
  //       category: "politics",
  //       language: "en",
  //       country: "us",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  let [newsData, setNewsData] = React.useState([]);

  React.useEffect(function () {
    console.log("Use Effect");
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        q +
        "&from=2022-03-23&sortBy=publishedAt&language=en&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
    )
      .then((res) => res.json())
      .then((answer) => setNewsData(answer.articles));
  }, []);

  let bodyOfNews = newsData.map((item) => {
    return (
      <NewsBody
        title={item.title}
        description={item.description}
        content={item.content}
        link={item.url}
        imageUrl={item.urlToImage}
      />
    );
  });
  // console.log("This is the obtained DATA ", newsData[4].content);
  // console.log("News Data Articles: ", newsData.articles[1]);
  return (
    <div className="App">
      <Header />
      {bodyOfNews}
    </div>
  );
}
