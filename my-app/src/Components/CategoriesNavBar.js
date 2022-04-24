import React from "react";

export default function CategoriesNavBar(props) {
  return (
    <div className="categoriesNavBar">
      <h2>Categories</h2>
      <button
        className="categoryButtons"
        id="general"
        onClick={props.handleClick}
      >
        General
      </button>
      <button
        className="categoryButtons"
        id="business"
        onClick={props.handleClick}
      >
        Business
      </button>
      <button
        className="categoryButtons"
        id="entertainment"
        onClick={props.handleClick}
      >
        Entertainment
      </button>
      <button
        className="categoryButtons"
        id="health"
        onClick={props.handleClick}
      >
        Health
      </button>
      <button
        className="categoryButtons"
        id="science"
        onClick={props.handleClick}
      >
        Science
      </button>
      <button
        className="categoryButtons"
        id="sports"
        onClick={props.handleClick}
      >
        Sports
      </button>
      <button
        className="categoryButtons"
        id="technology"
        onClick={props.handleClick}
      >
        Technology
      </button>
    </div>
  );
}
