import IRecipeDirections from '../interfaces/IRecipeDirections';

interface IRecipeDirectionsProps {
  directions: IRecipeDirections;
}

const RecipeDirections = ({ directions }: IRecipeDirectionsProps) => {
  return (
    <div>
      <h3>Directions</h3>
      {directions.methods.map((method) => (
        <>
          <h4 key={method.id}>{`${method.name} Method`}</h4>
          <ol>
            {method.steps.map((step) => (
              <>
                <li key={step.id}>{step.description}</li>
              </>
            ))}
          </ol>
        </>
      ))}
    </div>
  );
};

export default RecipeDirections;
