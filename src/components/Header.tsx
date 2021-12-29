const Header = () => {
  return (
    <header>
      <div id='top'></div>
      <h1>She Chefs Recipes</h1>
      <div>
        <label htmlFor='search' aria-label='search' />
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Find a recipe...'
        />
        <button>Search</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <a href='/'>Prev</a>
        <a href='/'>Next</a>
      </div>
    </header>
  );
};

export default Header;
