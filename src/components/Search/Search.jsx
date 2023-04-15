import React from 'react';
// import { BsSearch } from 'react-icons/bs'
import SearchIcon from '../../assets/vector6.svg';
import '../Search/Search.css';

const Search = () => {
    return (
        <div className='search__box'>
            <img src={SearchIcon} alt="search__icon" className="img__icon" />
            <input type="text" name="search" placeholder='Search' />
        </div>
    )
}

export default Search