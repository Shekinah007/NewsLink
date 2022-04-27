import React from "react";
import Header from "./Components/Header.js";
import NewsBody from "./Components/NewsBody.js";
import CategoriesNavBar from "./Components/CategoriesNavBar.js";

export default function App() {
  // console.clear();
  let date = new Date();
  let today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  // let section = document.getElementById("general");
  // let names = section.id;
  // console.log("NAMES ID: ", names);
  ///////////////////////////////////////////////////////////////////
  let [q, setQ] = React.useState("cats");
  function search() {
    setQ(prompt("Please enter your query"));
    setNewsToggle(true);
  }
  let [newsData, setNewsData] = React.useState([]);
  React.useEffect(
    function () {
      fetch(
        "https://newsapi.org/v2/everything?q=" +
          q +
          "&from=" +
          today +
          "&sortBy=relevancy&language=en&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
      )
        .then((res) => res.json())
        .then((answer) => setNewsData(answer.articles));
    },
    [q]
  );

  let [newsByCategory, setNewsByCategory] = React.useState([]);
  let [currentCategory, setCurrentCategory] = React.useState("general");
  function changeCategory(event) {
    console.log("EVENT ID: ", event.target.id);

    setCurrentCategory(event.target.id);
    console.log("CURRENT CATEGORY: ", currentCategory);
    setNewsToggle(false);
  }
  React.useEffect(
    function () {
      fetch(
        "https://newsapi.org/v2/top-headlines?category=" +
          currentCategory +
          "&language=en&apiKey=bd662b9c617d48bca5aa4e291b6ea52f"
      )
        .then((res) => res.json())
        .then((answer) => setNewsByCategory(answer.articles));
    },
    [currentCategory]
  );

  let [newsToggle, setNewsToggle] = React.useState(false);
  let bodyOfNews = (newsToggle ? newsData : newsByCategory).map((item) => {
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

  return (
    <div className="App">
      <Header />
      <CategoriesNavBar handleClick={changeCategory} />
      <button onClick={search} className="search">
        ClickToSearch
      </button>
      {bodyOfNews}
    </div>
  );
}
