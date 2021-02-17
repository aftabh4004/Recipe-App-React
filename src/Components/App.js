import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import SearchBar from "./searchbar/searchbar";
import SideBar from "./SideBar/SideBar";
import Cover from "./Cover/Cover";
import Loading from "./Loading/Loading";
import "./App.css";

const App = () => {
  const APP_ID = "3d7272c9";
  const APP_KEY = "aa21b3bc3e7c4c79daeaa3e69260bbbc";

  const [recipes, setRecipe] = useState([]);

  const [allRecipe, setAllRecipe] = useState([]);
  const [shouldShowCover, setShowCover] = useState(true);
  const [shouldShowLoading, setShowLoading] = useState(true);

  useEffect(() => {}, []);

  const getRecipe = async (category) => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const resJson = await res.json();
    setRecipe(resJson.hits);
    setAllRecipe(resJson.hits);
    setShowLoading(false);

    console.log(resJson.hits);
  };

  return (
    <div className="app">
      <SideBar getRecipe={getRecipe} setShowCover={setShowCover} setShowLoading={setShowLoading} />
      <SearchBar allRecipe={allRecipe} setRecipe={setRecipe} />
      {shouldShowCover ? (
        <Cover />
      ) : shouldShowLoading ? (
        <Loading />
      ) : (
        recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.floor(recipe.recipe.calories)}
            dietLabels={recipe.recipe.dietLabels}
            healthLabels={recipe.recipe.healthLabels}
            link={recipe.recipe.url}
            image={recipe.recipe.image}
          />
        ))
      )}
    </div>
  );
};

export default App;
