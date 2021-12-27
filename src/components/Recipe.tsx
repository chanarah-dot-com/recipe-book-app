import ChefsTip from './ChefsTip';
import RecipeDirections from './RecipeDirections';
import RecipeIngredients from './RecipeIngredients';
import RecipeOverview from './RecipeOverview';
import RecipeSupplies from './RecipeSupplies';

const Recipe = () => {
  return (
    <main>
      <RecipeOverview />
      <RecipeSupplies />
      <RecipeIngredients />
      <ChefsTip />
      <RecipeDirections />
    </main>
  );
};

export default Recipe;