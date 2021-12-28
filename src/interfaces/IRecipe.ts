import Difficulty from '../enums/Difficulty';
import IChefsTip from './IChefsTip';
import IRecipeDirections from './IRecipeDirections';
import IRecipeIngredient from './IRecipeIngredient';
import IRecipeSupplyItem from './IRecipeSupplyItem';

interface IRecipe {
  id: number;
  name: string;
  difficulty: Difficulty;
  preparationTime: number;
  cookingTime: number;
  servings: number;
  supplies: IRecipeSupplyItem[];
  ingredients: IRecipeIngredient[];
  chefsTip?: IChefsTip;
  directions: IRecipeDirections;
  image?: string;
}

export default IRecipe;
