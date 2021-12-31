import Difficulty from "../enums/Difficulty";
import IRecipe from "../interfaces/IRecipe";
import GrilledCheeseSandwich from "../grilled-cheese-sandwich.jpg";

const grilledCheeseSandwich2: IRecipe = {
  id: 3,
  name: "Grilled Cheese Sandwich2",
  difficulty: Difficulty.EASY,
  image: GrilledCheeseSandwich,
  preparationTime: 5,
  cookingTime: 5,
  servings: 1,
  supplies: [
    {
      id: 1,
      name: "Spatula",
      quantity: 1,
    },
    {
      id: 2,
      name: "Skillet",
      quantity: 1,
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Bread",
      quantity: 2,
      measurement: "Slices",
      description:
        "such as white, rye, brioche, sourdough, potato, whole wheat, pumpernickel",
    },
    {
      id: 2,
      name: "Cheese",
      quantity: 2,
      measurement: "Ounces/Slices",
      description:
        "such as American, Cheddar, muenster, Havarti, Swiss, fontina, Mozzarella, Monterey jack, pepper jack, provolone",
    },
    {
      id: 3,
      name: "Fat",
      quantity: 1,
      measurement: "Tablespoon",
      description: "such as mayonnaise, butter or olive, chili or coconut oil",
    },
  ],
  directions: {
    methods: [
      {
        id: 1,
        name: "Oven",
        steps: [
          {
            id: 1,
            description:
              "Great for a crowd of six or fewer: Put a rimmed baking sheet on the middle rack of the oven and preheat to 450 degrees F.  Make one sandwich per person: Sandwich 2 slices of cheese between 2 slices of bread. Spread or brush the outside of the sandwich with 1 tablespoon of fat. Place on the preheated baking sheet and cook until the cheese starts to melt, about 5 minutes. Flip the sandwich and bake until golden brown, an additional 5 minutes.",
          },
        ],
      },
      {
        id: 2,
        name: "Panini Press",
        steps: [
          {
            id: 1,
            description:
              "For crispy crunchy sandwich that needs minimal attention): Sandwich 2 slices of cheese between 2 slices of bread.  Preheat a panini press to medium heat. Spread or brush the outside of the sandwich with 1 tablespoon of fat and place in the press. Close the top and cook until lightly browned and the cheese is melted, 5 to 6 minutes.",
          },
        ],
      },
      {
        id: 3,
        name: "Skillet",
        steps: [
          {
            id: 1,
            description:
              "Fool-proof and low-tech): Sandwich 2 slices of cheese between 2 slices of bread. Preheat a skillet over medium-low heat.  Spread or brush the outside of the sandwich with 1 tablespoon of fat and cook until lightly browned, 3 to 4 minutes. Flip the sandwich, and continue cooking until browned and the cheese is melted, 3 to 4 minutes more.",
          },
        ],
      },
    ],
  },
  chefsTip: {
    name: "Great Combos",
    list: [
      {
        id: 1,
        description: "Pepper jack and sourdough brushed with chili oil",
      },
      {
        id: 2,
        description: "American and white bread brushed with butter",
      },
      {
        id: 3,
        description: "Swiss and rye brushed with mayo",
      },
      {
        id: 4,
        description: "Cheddar and brioche brushed with butter",
      },
    ],
  },
};

export default grilledCheeseSandwich2;
