import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search-bar">
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search recipes..." value={searchTerm} onChange={onChange}/>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        </div>
    )

}

export default SearchBar