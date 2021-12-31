import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import data from "./data/data";
import IRecipe from "./interfaces/IRecipe";

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>(1);

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  const nextRecipe = () => {
    if (recipes)
      selectedRecipe === recipes.length
        ? setSelectedRecipe(1)
        : setSelectedRecipe(selectedRecipe + 1);
  };

  const prevRecipe = () => {
    if (recipes)
      selectedRecipe === 1
        ? setSelectedRecipe(recipes.length)
        : setSelectedRecipe(selectedRecipe - 1);
  };

  return selectedRecipe ? (
    <div className="App">
      <Header nextRecipe={nextRecipe} prevRecipe={prevRecipe} />
      <Recipe
        selectedRecipe={recipes?.find((recipe) => recipe.id === selectedRecipe)}
      />
      <Footer />
    </div>
  ) : null;
};

export default App;
