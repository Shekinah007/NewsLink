import React from "react";

export default function NewsBody(props) {
  //   console.log("From news Body: ", props.newsObject);
  console.log("Im am NEWSBODY ", props.newsObject.articles);
  return (
    <div className="newsBody">
      <p>{props.newsObject}</p>
    </div>
  );
}
