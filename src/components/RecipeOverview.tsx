import Difficulty from '../enums/Difficulty';

interface IRecipeOverviewProps {
  name: string;
  difficulty: Difficulty;
  preparationTime: number;
  cookingTime: number;
  servings: number;
  image?: string;
}

const RecipeOverview = ({
  name,
  difficulty,
  preparationTime,
  cookingTime,
  servings,
  image,
}: IRecipeOverviewProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <img style={{ aspectRatio: '1', width: '10rem' }} src={image} alt='' />
      <ul>
        <li>
          Difficulty: <b>{difficulty}</b>
        </li>
        <li>
          Preparation Time: <b>{preparationTime} minutes</b>
        </li>
        <li>
          Cooking Time: <b>{cookingTime} minutes</b>
        </li>
        <li>
          Total Time:{' '}
          <b>{(preparationTime as number) + (cookingTime as number)} minutes</b>
        </li>
        <li>
          Servings: <b>{servings}</b>
        </li>
      </ul>
    </div>
  );
};

export default RecipeOverview;
