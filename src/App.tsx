import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './components/Recipe';
import IRecipes from './interfaces/IRecipes';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipes>();
  const [selectedRecipe, setSelectedRecipe] = useState<number>(1);

  return (
    <div className='App'>
      <Header />
      <Recipe selectedRecipe={selectedRecipe} />
      <Footer />
    </div>
  );
};

export default App;
