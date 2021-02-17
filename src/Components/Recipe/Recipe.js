import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, dietLabels, healthLabels, link }) => {
  return (
    <div className="reciperoot">
      <div>
        <img src={image} alt="food image"></img>
      </div>
      <div>
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__details">
          <i>Calories:</i> {calories}
        </p>
        <p className="recipe__details">
          <i>Diet Labels:</i>{" "}
          {dietLabels.map((data) => (
            <li className="listitem">{data}</li>
          ))}
        </p>
        <p className="recipe__details">
          <i>Health Labels:</i>{" "}
          {healthLabels.map((data) => (
            <li className="listitem">{data}</li>
          ))}
        </p>
        <p>
          <i>Detailed Recipe:</i>{" "}
          <a href={link} target="_blank">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
