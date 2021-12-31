import { Link } from "react-router-dom";

interface IHeaderProps {
  nextRecipe: () => void;
  prevRecipe: () => void;
}

const Header = ({ nextRecipe, prevRecipe }: IHeaderProps) => {
  return (
    <header>
      <div id="top"></div>
      <h1>She Chefs Recipes</h1>
      <div>
        <label htmlFor="search" aria-label="search" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find a recipe..."
        />
        <button>Search</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link onClick={prevRecipe} to="/">
          Prev
        </Link>
        <Link onClick={nextRecipe} to="/">
          Next
        </Link>
      </div>
    </header>
  );
};

export default Header;
