import React from "react";
import Header from "./Components/Header.js";
import NewsBody from "./Components/NewsBody.js";
import CategoriesNavBar from "./Components/CategoriesNavBar.js";

export default function App() {
  console.clear();
  // console.log(document.getElementById("general").innerText);
  // let section = document.getElementById("general");
  // let names = section.id;
  // console.log(names);
  let [q, setQ] = React.useState("russia");
  function search() {
    setQ(prompt("Please enter your query"));
  }
  let [newsData, setNewsData] = React.useState([]);
  React.useEffect(
    function () {
      console.log("Use Effect");
      fetch(
        "https://newsapi.org/v2/everything?q=" +
          q +
          "&from=2022-03-23&sortBy=publishedAt&language=en&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
      )
        .then((res) => res.json())
        .then((answer) => setNewsData(answer.articles));
    },
    [q]
  );

  let [newsByCategory, setNewsByCategory] = React.useState();
  let [currentCategory, setCurrentCategory] = React.useState("general");
  function changeCategory() {
    setCurrentCategory(document.getElementById("general").innerHTML);
  }
  React.useEffect(
    function () {
      console.log("Use Effect");
      fetch(
        "https://newsapi.org/v2/top-headlines?category=general&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
      )
        .then((res) => res.json())
        .then((answer) => setNewsByCategory(answer.articles));
    },
    [currentCategory]
  );

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
      <CategoriesNavBar />
      <button onClick={search} className="search">
        ClickToSearch
      </button>
      {bodyOfNews}
    </div>
  );
}
