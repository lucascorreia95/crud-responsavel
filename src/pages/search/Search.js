import React from 'react';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchPagination from './SearchPagination';
import SearchLightbox from './SearchLightbox';

import './style.css';

function Search() {
    return(
        <div className='search'>
            <div className='search__container container'>
                <SearchForm />
                <SearchResult />
                <SearchPagination />
                <SearchLightbox />
            </div>
        </div>
    )
}

export default Search;
