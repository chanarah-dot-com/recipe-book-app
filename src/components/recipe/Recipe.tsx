import IRecipe from '../../interfaces/IRecipe';
import ChefsTip from '../chefs-tip/ChefsTip';
import RecipeDirections from '../RecipeDirections';
import RecipeIngredients from '../recipe-ingredients/RecipeIngredients';
import RecipeOverview from '../recipe-overview/RecipeOverview';
import RecipeSupplies from '../recipe-supplies/RecipeSupplies';
import './Recipe.css';

interface IRecipeProps {
  selectedRecipe?: IRecipe;
}

const Recipe = ({ selectedRecipe }: IRecipeProps) => {
  return selectedRecipe ? (
    <main className='recipe--main'>
      <RecipeOverview
        name={selectedRecipe.name}
        difficulty={selectedRecipe.difficulty}
        preparationTime={selectedRecipe.preparationTime}
        cookingTime={selectedRecipe.cookingTime}
        servings={selectedRecipe.servings}
        image={selectedRecipe.image}
      />
      <RecipeSupplies supplies={selectedRecipe.supplies} />
      <RecipeIngredients ingredients={selectedRecipe.ingredients} />
      <ChefsTip chefsTip={selectedRecipe.chefsTip} />
      <RecipeDirections directions={selectedRecipe.directions} />
    </main>
  ) : null;
};

export default Recipe;
