interface IRecipeDirections {
  methods: {
    id: number;
    name: string;
    steps: {
      id: number;
      description: string;
    }[];
  }[];
}

export default IRecipeDirections;
