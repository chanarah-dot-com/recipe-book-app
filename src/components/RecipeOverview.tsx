import GrilledCheeseSandwich from '../grilled-cheese-sandwich.jpg';

const RecipeOverview = () => {
  return (
    <div>
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <a href='/'>Previous</a>
        </div>
        <div>
          <a href='/'>Next</a>
        </div>
      </div>
      <h2>Grilled Cheese Sandwich</h2>
      <img
        style={{ aspectRatio: '1', width: '10rem' }}
        src={GrilledCheeseSandwich}
        alt=''
      />
      <ul>
        <li>
          Difficulty: <b>Easy</b>
        </li>
        <li>
          Preparation Time: <b>5 minutes</b>
        </li>
        <li>
          Cooking Time: <b>5 minutes</b>
        </li>
        <li>
          Total Time: <b>10 minutes</b>
        </li>
        <li>
          Servings: <b>1</b>
        </li>
      </ul>
    </div>
  );
};

export default RecipeOverview;
