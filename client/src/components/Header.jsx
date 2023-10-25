import React from 'react'
import SearchBar from './SearchBar'

const Header = ({ setSearchResults }) => {

    return (
        <>
        <header>
            <h1> RecipeFlix </h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/favourites">Favourites</a>
                    </li>
                </ul>
            </nav>
        </header>
        < SearchBar setSearchResults={setSearchResults} />
        </>
    )
}

export default Header