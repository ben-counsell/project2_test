import React from 'react'
import SearchBar from './SearchBar'

const Header = ({ setSearchResults }) => {

    return (
        <>
        <header>
            <a href="/"><h1> RecipeFlix </h1></a>
            < SearchBar setSearchResults={setSearchResults} />
        </header>
        </>
    )
}

export default Header