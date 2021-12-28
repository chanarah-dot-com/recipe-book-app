import IRecipe from '../interfaces/IRecipe';
import ChefsTip from './ChefsTip';
import RecipeDirections from './RecipeDirections';
import RecipeIngredients from './RecipeIngredients';
import RecipeOverview from './RecipeOverview';
import RecipeSupplies from './RecipeSupplies';

interface IRecipeProps {
  selectedRecipe?: IRecipe;
}

const Recipe = ({ selectedRecipe }: IRecipeProps) => {
  return selectedRecipe ? (
    <main>
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
