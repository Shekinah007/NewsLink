import React from "react";

export default function NewsBody(props) {
  //   console.log("News Body!! ", props.newsObject[0].description);
  return (
    <div className="newsBody">
      <h2>{props.title}</h2>
      <div className="textAndImage">
        <div className="text">
          <h4>{props.description}</h4>
          <p>{props.content}</p>
        </div>
        <img src={props.imageUrl} height="200px"></img>
      </div>
      <a href={props.link}>Details...</a>
      <hr />
    </div>
  );
}
