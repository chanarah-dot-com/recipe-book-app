import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
  nextRecipe: () => void;
  prevRecipe: () => void;
  filterRecipes: (keyword: string) => void;
}

const Header = ({ nextRecipe, prevRecipe, filterRecipes }: IHeaderProps) => {
  const [userInput, setUserInput] = useState("");

  const handleClickReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setUserInput("");
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    filterRecipes(userInput);
  };

  return (
    <header>
      <div id="top"></div>
      <h1>She Chefs Recipes</h1>
      <div>
        <label htmlFor="search" aria-label="search" />
        <input
          // onChange={searchForRecipe}
          onChange={handleChangeInput}
          type="text"
          name="search"
          id="search"
          value={userInput}
          placeholder="Find a recipe..."
        />
        <button onClick={handleClickReset} type="reset">
          Reset
        </button>
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
