import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Recipe from "./components/Recipe";
import data from "./data/data";
import IRecipe from "./interfaces/IRecipe";

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>(data.recipes);
  const [selectedRecipe, setSelectedRecipe] = useState<number>(0);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(
    data.recipes
  );

  const nextRecipe = () => {
    if (filteredRecipes)
      selectedRecipe === filteredRecipes.length - 1
        ? setSelectedRecipe(0)
        : setSelectedRecipe(selectedRecipe + 1);
  };

  const prevRecipe = () => {
    if (filteredRecipes)
      selectedRecipe === 0
        ? setSelectedRecipe(filteredRecipes.length - 1)
        : setSelectedRecipe(selectedRecipe - 1);
  };

  const filterRecipes = (keyword: string) => {
    const results = recipes?.filter((recipe) => {
      return recipe.name
        .trim()
        .toLowerCase()
        .startsWith(keyword.trim().toLowerCase());
    });

    if (results) {
      setSelectedRecipe(0);
      setFilteredRecipes(results);
    }
  };

  return (
    <div className="App">
      <Header
        nextRecipe={nextRecipe}
        prevRecipe={prevRecipe}
        filterRecipes={filterRecipes}
      />
      <Recipe selectedRecipe={filteredRecipes[selectedRecipe]} />
      <Footer />
    </div>
  );
};

export default App;
