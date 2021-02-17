import React from "react";
import "./sidebar.css";

const SideBar = ({ getRecipe, setShowCover, setShowLoading }) => {
  const handleCatClick = (event) => {
    setShowLoading(true);
    setShowCover(false);
    const category = event.target.id;
    getRecipe(category);
  };
  return (
    <div className="sidebar">
      <h1 className="sidebar__header">Category</h1>
      <h3 className="sidebar__cat" id="Chicken" onClick={handleCatClick}>
        Chicken
      </h3>
      <h3 className="sidebar__cat" id="Mutton" onClick={handleCatClick}>
        Mutton
      </h3>
      <h3 className="sidebar__cat" id="Paneer" onClick={handleCatClick}>
        Paneer
      </h3>
      <h3 className="sidebar__cat" id="Vegetables" onClick={handleCatClick}>
        Vegetables
      </h3>
    </div>
  );
};

export default SideBar;
