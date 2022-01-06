import Difficulty from '../../enums/Difficulty';
import './RecipeOverview.css';

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
    <div className='recipe-overview--container'>
      <h2>{name}</h2>
      <img className='recipe-overview--img' src={image} alt='' />
      <ul className='recipe-overview--ul'>
        <li className='recipe-overview--li'>
          <div className='recipe-overview--li-key'>Difficulty:</div>
          <div className='recipe-overview--li-value'>
            <b>{difficulty}</b>
          </div>
        </li>
        <li className='recipe-overview--li'>
          <div className='recipe-overview--li-key'>Preparation Time:</div>
          <div className='recipe-overview--li-value'>
            <b>{preparationTime} minutes</b>
          </div>
        </li>
        <li className='recipe-overview--li'>
          <div className='recipe-overview--li-key'>Cooking Time:</div>
          <div className='recipe-overview--li-value'>
            <b>{cookingTime} minutes</b>
          </div>
        </li>
        <li className='recipe-overview--li'>
          <div className='recipe-overview--li-key'>Total Time:</div>
          <div className='recipe-overview--li-value'>
            <b>
              {(preparationTime as number) + (cookingTime as number)} minutes
            </b>
          </div>
        </li>
        <li className='recipe-overview--li'>
          <div className='recipe-overview--li-key'>Servings:</div>
          <div className='recipe-overview--li-value'>
            <b>{servings}</b>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecipeOverview;
