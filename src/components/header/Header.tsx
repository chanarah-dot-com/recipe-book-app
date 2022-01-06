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
  const [greyButton, setGreyButton] = useState(true);

  const handleClickReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setUserInput('');
    filterRecipes('');
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    filterRecipes(event.target.value);
  };

  const handleFocusInput = () => {
    setGreyButton(false);
  };

  const handleBlurInput = () => {
    setGreyButton(true);
  };

  return (
    <header className='header--header'>
      <div className="header--header-container">
        <div id='top'></div>
        <div>
          <b>She Chefs Recipes</b>
        </div>
        <div className='header--search-container'>
          <label htmlFor='search' aria-label='search' />
          <input
            onChange={handleChangeInput}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
            type='text'
            name='search'
            id='search'
            value={userInput}
            placeholder='Find a recipe...'
          />
          <button
            className={greyButton ? 'grey' : ''}
            onClick={handleClickReset}
            type='reset'
          >
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
