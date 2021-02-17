import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ allRecipe, setRecipe }) => {
  const [searchText, setsearchText] = useState("");

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    setsearchText(searchValue);
    console.log(allRecipe);
    const searchResult = allRecipe.filter((recipe) => {
      return recipe.recipe.label
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    console.log(searchResult);
    setRecipe(searchResult);
  };

  const handleClearBtn = (event) => {
    event.preventDefault();
    setsearchText("");
    setRecipe(allRecipe);
  };

  return (
    <div className="searchbar">
      <form className="recipeform">
        <div className="formdiv">
          <div className="inputdiv">
            <input
              type="text"
              className="searchbox"
              value={searchText}
              placeholder="What's you looking for?"
              onChange={handleInputChange}
            />
          </div>
          <div className="clearbtndiv">
            {searchText.length > 0 && (
              <button className="clearbtn" onClick={handleClearBtn}>
                &#10008;
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
