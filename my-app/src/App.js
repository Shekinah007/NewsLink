import React from "react";
import Header from "./Components/Header.js";
import NewsBody from "./Components/NewsBody.js";

function App() {
  // console.clear();
  let [newsData, setNewsData] = React.useState([
    {
      // content: "Hello World",
    },
  ]);

  React.useEffect(function () {
    console.log("Use Effect");
    fetch(
      "https://newsapi.org/v2/everything?q=dog&from=2022-03-23&sortBy=publishedAt&language=en&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
    )
      .then((res) => res.json())
      .then((answer) => setNewsData(answer.articles));
  }, []);
  // console.log("This is the obtained DATA ", newsData[4].content);
  // console.log("News Data Articles: ", newsData.articles[1]);
  return (
    <div className="App">
      <Header />
      <p>{newsData[0].content}</p>
      <p>{newsData[0].description}</p>
      <a href="{newsData[0].url}"> More.. </a>
      <a href={newsData[0].url}>Hahahha</a>
      <p>Hss</p>
      {/* <p>{newsData}</p> */}
      {/* <p>{name}</p> */}
      {/* <NewsBody newsObject={newsData.description} /> */}
    </div>
  );
}

export default App;
