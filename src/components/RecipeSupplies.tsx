import IRecipeSupplyItem from '../interfaces/IRecipeSupplyItem';

interface IRecipeSuppliesProps {
  supplies: IRecipeSupplyItem[];
}

const RecipeSupplies = ({ supplies }: IRecipeSuppliesProps) => {
  return (
    <div>
      <h3>Supplies</h3>
      <ul>
        {supplies.map((item) => (
          <>
            <li key={item.id}>{`${item.quantity} ${item.name}`}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSupplies;
