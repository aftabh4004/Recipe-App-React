import React from "react";
import "./sidebar.css";

const SideBar = ({ getRecipe, setShowCover, setShowLoading }) => {
  const handleCatClick = (event) => {
    document
      .getElementsByClassName("sidebar__links")[0]
      .classList.toggle("active");
    setShowLoading(true);
    setShowCover(false);
    const category = event.target.id;
    getRecipe(category);
  };

  const handleToggleClick = () => {
    document
      .getElementsByClassName("sidebar__links")[0]
      .classList.toggle("active");
  };
  return (
    <div className="sidebar">
      <h1 className="sidebar__header">foodani</h1>
      <a href="#" className="toggle__button" onClick={handleToggleClick}>
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
      </a>
      <div className="sidebar__links">
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
    </div>
  );
};

export default SideBar;
