import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import data from "./data/data";
import IRecipe from "./interfaces/IRecipe";

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>(0);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(
    data.recipes
  );

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  const nextRecipe = () => {
    if (recipes)
      selectedRecipe === recipes.length - 1
        ? setSelectedRecipe(0)
        : setSelectedRecipe(selectedRecipe + 1);
  };

  const prevRecipe = () => {
    if (recipes)
      selectedRecipe === 0
        ? setSelectedRecipe(recipes.length - 1)
        : setSelectedRecipe(selectedRecipe - 1);
  };

  const filterRecipes = (keyword: string) => {
    const results = recipes?.filter((recipe) => {
      return recipe.name.toLowerCase().startsWith(keyword.toLowerCase());
    });

    if (results) {
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
      <Recipe
        selectedRecipe={
          filteredRecipes ? filteredRecipes[selectedRecipe] : undefined
        }
      />
      <Footer />
    </div>
  );
};

export default App;
