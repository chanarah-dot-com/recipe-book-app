import Difficulty from '../enums/Difficulty';
import IRecipe from '../interfaces/IRecipe';
import SwedishMeatballs from '../swedish-meatballs.webp';

const swedishMeatballs: IRecipe = {
  id: 2,
  cookingTime: 60,
  preparationTime: 20,
  servings: 5,
  ingredients: [
    {
      id: 1,
      quantity: 1,
      measurement: 'Tablespoon',
      name: 'Butter',
    },
    {
      id: 2,
      quantity: 0.5,
      measurement: 'Large',
      name: 'Onion',
      description: 'grated using large holes of box grater',
    },
    {
      id: 3,
      quantity: 0.25,
      measurement: 'Cup',
      name: 'Milk',
    },
    {
      id: 4,
      quantity: 3,
      measurement: 'Slices',
      name: 'Bread',
      description: 'crust removed, cut into cubes',
    },
    {
      id: 5,
      quantity: 1,
      measurement: 'Large',
      name: 'Egg',
    },
    {
      id: 6,
      quantity: 0.75,
      measurement: 'Pound',
      name: 'Ground Beef',
    },
    {
      id: 7,
      quantity: 0.5,
      measurement: 'Pound',
      name: 'Ground Pork',
    },
    {
      id: 8,
      quantity: 1,
      measurement: 'Teaspoon',
      name: 'Kosher Salt',
    },
    {
      id: 9,
      quantity: 1,
      measurement: 'Teaspoon',
      name: 'Black Pepper',
    },
    {
      id: 10,
      quantity: 0.5,
      measurement: 'Teaspoon',
      name: 'Freshly Grated Nutmeg',
    },
    {
      id: 11,
      quantity: 0.5,
      measurement: 'Teaspoon',
      name: 'Ground Cardamom',
    },
    {
      id: 12,
      quantity: 3,
      measurement: 'Tablespoons',
      name: 'Butter',
    },
    {
      id: 13,
      quantity: 3,
      measurement: 'Tablespoons',
      name: 'Flour',
    },
    {
      id: 14,
      quantity: 2,
      measurement: 'Cups',
      name: 'Beef Stock',
    },
    {
      id: 15,
      quantity: 0.25,
      measurement: 'Cup',
      name: 'Sour Cream',
      description: 'use full-fat to prevent sauce from curdling',
    },
    {
      id: 16,
      name: 'Salt And Pepper',
      description: 'to taste',
    },
    {
      id: 17,
      quantity: 2,
      measurement: 'Tablespoons',
      name: 'Jelly',
      description:
        'lingonberry, red currant, raspberry or cranberry (optional, to taste)',
    },
  ],
  directions: {
    methods: [
      {
        id: 1,
        name: 'Stovetop',
        steps: [
          {
            id: 1,
            description:
              'Soak bread in milk then shred: Place the cubed bread in a large bowl and mix with the milk. Let sit for 5 to 10 minutes. Once the bread has soaked up all the milk, shred with the tines of a fork or by hand.',
          },
          {
            id: 2,
            description:
              'Sauté grated onion: Melt the butter in a sauté pan on medium-high heat. Stir in the grated onion and cook until translucent and softened, 3 to 4 minutes. Remove from heat and let cool for a minute.',
          },
          {
            id: 3,
            description:
              'Make the meatball mixture: Stir the cooled onions into the milk bread mixture. Add the eggs, ground beef and pork, salt, pepper, nutmeg, and cardamom. Use your (clean) hands to mix everything together until well combined. (If you have extra time, chilling the mixture for 20 or so minutes will make it easier to roll out the meatballs.)',
          },
          {
            id: 4,
            description:
              'Form the meatballs: Use your hands to form the mixture into meatballs about 1 1/4-inch to 1 1/2-inch wide and place them on a plate or sheet pan. This recipe should make about 40 meatballs. Note that the meatballs will be a bit on the wet side.',
          },
          {
            id: 5,
            description:
              "Brown the meatballs on all sides:  Heat 3 tablespoons of butter in a large sauté pan on medium heat. When the butter is melted and foamy, start adding some meatballs to the pan.\nWorking in batches as to not crowd the pan, slowly brown the meatballs on all sides. Use a wooden spoon or tongs to turn them. Handle the meatballs gently so they do not break apart as you turn them.\nOnce the meatballs have browned on all sides and are just cooked through, remove them from the pan to a bowl. You'll warm the meatballs in the sauce later.\nOnce you have removed the meatballs from the pan, wipe out the butter and blackened bits with a paper towel.\nWe'll want to start with fresh butter so we don't pick up any burnt bits from the pan. This way, we will be able to more accurately gauge the amount of fat in the pan for making the meatball sauce in the next step.",
          },
          {
            id: 6,
            description:
              'Make a roux: First, make the roux. Add 3 tablespoons of fresh butter to the pan. Heat the butter in the pan on medium heat until it melts and starts to bubble up.\nSlowly whisk in 3 tablepoons of flour. Stir until smooth. Continue to stir, allowing the flour mixture to cook, several minutes, until the roux is the color of coffee with cream.',
          },
          {
            id: 7,
            description:
              'Add stock to make the sauce: When the roux has cooked to a lovely shade of light brown, slowly add the stock, stirring as you do. The stock will sputter at first and the roux may seize up, but keep adding the stock slowly and keep stirring. Eventually the sauce will loosen and become silky.',
          },
          {
            id: 8,
            description:
              'Stir in the sour cream and optional jelly: Remove the pan from heat and stir in the sour cream. If you are including jelly, either stir it in now or serve it on the side. Taste for seasonings and add more salt and pepper to taste. (I use about 1/2 teaspoon of kosher salt, and 1/4 teaspoon of pepper.)',
          },
          {
            id: 9,
            description:
              'Heat the meatballs in the sauce: Return the meatballs to the pan with the sauce and cook on low heat to warm them through for a few minutes.',
          },
          {
            id: 10,
            description:
              'Serve fresh from the pan: Serve over mashed potatoes or egg noodles. Or serve individual Swedish meatballs dipped in gravy as an appetizer.',
          },
        ],
      },
    ],
  },
  difficulty: Difficulty.MEDIUM,
  name: 'Swedish Meatballs',
  supplies: [{ id: 1, name: 'Skillet', quantity: 1 }],
  image: SwedishMeatballs,
};

export default swedishMeatballs;
