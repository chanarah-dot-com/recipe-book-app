import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './components/Recipe';
import data from './data/data';
import IRecipe from './interfaces/IRecipe';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>(2);

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  return selectedRecipe ? (
    <div className='App'>
      <Header />
      <Recipe
        selectedRecipe={recipes?.find((recipe) => recipe.id === selectedRecipe)}
      />
      <Footer />
    </div>
  ) : null;
};

export default App;
