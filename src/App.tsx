import './App.css';
import GrilledCheeseSandwich from './grilled-cheese-sandwich.jpg';

function App() {
  return (
    <div className='App'>
      <div id='top'></div>
      <h1>She Chefs Recipes</h1>
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
          Difficulty Level: <b>Easy</b>
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
      <h3>Supplies</h3>
      <ul>
        <li>1 skillet</li>
        <li>1 spatula</li>
      </ul>
      <h3>Ingredients</h3>
      <ul>
        <li>
          2 slices bread, such as white, rye, brioche, sourdough, potato, whole
          wheat, pumpernickel
        </li>
        <li>
          2 ounces sliced melting cheese (about 2 slices), such as American,
          Cheddar, muenster, Havarti, Swiss, fontina, Mozzarella, Monterey jack,
          pepper jack, provolone
        </li>
        <li>
          1 tablespoon fat, such as mayonnaise, butter or olive, chili or
          coconut oil
        </li>
      </ul>
      <h4>Chef's Tip: Great Combos</h4>
      <ol>
        <li>Pepper jack and sourdough brushed with chili oil</li>
        <li>American and white bread brushed with butter</li>
        <li>Swiss and rye brushed with mayo</li>
        <li>Cheddar and brioche brushed with butter</li>
      </ol>
      <h3>Directions</h3>
      <ol>
        <li>
          Oven method (great for a crowd of six or fewer): Put a rimmed baking
          sheet on the middle rack of the oven and preheat to 450 degrees F.
          Make one sandwich per person: Sandwich 2 slices of cheese between 2
          slices of bread. Spread or brush the outside of the sandwich with 1
          tablespoon of fat. Place on the preheated baking sheet and cook until
          the cheese starts to melt, about 5 minutes. Flip the sandwich and bake
          until golden brown, an additional 5 minutes.{' '}
        </li>
        <li>
          Panini press method (for crispy crunchy sandwich that needs minimal
          attention): Sandwich 2 slices of cheese between 2 slices of bread.
          Preheat a panini press to medium heat. Spread or brush the outside of
          the sandwich with 1 tablespoon of fat and place in the press. Close
          the top and cook until lightly browned and the cheese is melted, 5 to
          6 minutes.
        </li>
        <li>
          Skillet method (fool-proof and low-tech): Sandwich 2 slices of cheese
          between 2 slices of bread. Preheat a skillet over medium-low heat.
          Spread or brush the outside of the sandwich with 1 tablespoon of fat
          and cook until lightly browned, 3 to 4 minutes. Flip the sandwich, and
          continue cooking until browned and the cheese is melted, 3 to 4
          minutes more.
        </li>
      </ol>
      <a href='#top'>Back To Top</a>
    </div>
  );
}

export default App;
