import React from "react";

export default function NewsBody(props) {
  //   console.log("News Body!! ", props.newsObject[0].description);
  return (
    <div className="newsBody">
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <p>{props.content}</p>
      <img src={props.imageUrl} height="200px"></img>
      <a href={props.link}>More</a>
      <hr />
    </div>
  );
}
