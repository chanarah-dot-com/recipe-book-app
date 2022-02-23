import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  nextRecipe: () => void;
  prevRecipe: () => void;
  filterRecipes: (keyword: string) => void;
}

const Header = ({ nextRecipe, prevRecipe, filterRecipes }: IHeaderProps) => {
  const [userInput, setUserInput] = useState('');

  const handleClickReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setUserInput('');
    filterRecipes('');
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    filterRecipes(event.target.value);
  };

  return (
    <header className='header--header'>
      <div className='header--div'>
        <div id='top'></div>
        <h1 className='header--h1'>She Chefs Recipes</h1>
        <div className='header--search-container'>
          <label htmlFor='search' aria-label='search' />
          <input
            onChange={handleChangeInput}
            type='text'
            name='search'
            id='search'
            value={userInput}
            placeholder='Find a recipe...'
          />
          <button onClick={handleClickReset} type='reset'>
            Reset
          </button>
        </div>
        <div className='header--link-container'>
          <Link className='header--link' onClick={prevRecipe} to='/'>
            {`<< Prev`}
          </Link>
          <Link className='header--link' onClick={nextRecipe} to='/'>
            {`Next >>`}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
