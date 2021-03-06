import IRecipeIngredient from '../interfaces/IRecipeIngredient';

interface IRecipeIngredientsProps {
  ingredients: IRecipeIngredient[];
}

const RecipeIngredients = ({ ingredients }: IRecipeIngredientsProps) => {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <>
            <li key={ingredient.id}>
              <b>
                {`${ingredient.quantity} ${ingredient.measurement} ${ingredient.name}`}{' '}
              </b>
              {ingredient.description && `${ingredient.description}`}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
