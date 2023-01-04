import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.url} alt="placeholder image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-text">
          <p>{props.text}</p>
        </div>
      </div>
      <Link to={props.link}>
        <button>Sign up</button>
      </Link>
    </div>
  );
}

export default Cards;
