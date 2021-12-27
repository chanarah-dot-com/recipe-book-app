const Header = () => {
  return (
    <header>
      <div id='top'></div>
      <h1>She Chefs Recipes</h1>
      <div>
        <label htmlFor='search'>Search: </label>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Find a recipe...'
        />
      </div>
    </header>
  );
};

export default Header;
