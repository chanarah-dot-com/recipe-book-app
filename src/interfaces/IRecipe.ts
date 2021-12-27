interface IRecipe {
  id: number;
  name: string;
  difficulty: string;
  preparationTime: number;
  cookingTime: number;
  servings: 1;
  supplies: {
    id: number;
    name: string;
    quantity: number;
  }[];
  ingredients: {
    id: number;
    name: string;
    quantity: number;
    measurement: string;
    description: string;
  }[];
  chefsTip?: {
    name: string;
    list: {
      id: number;
      description: string;
    }[];
  };
  directions: {
    method: {
      name: string;
      steps: {
        id: number;
        description: string;
      }[];
    }[];
  }[];
}

export default IRecipe;
